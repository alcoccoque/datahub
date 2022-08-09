from datetime import datetime
from unittest import mock

from freezegun import freeze_time

from datahub.ingestion.run.pipeline import Pipeline
from datahub.ingestion.source.powerbi_report_server import Constant, CorpUser
from tests.test_helpers import mce_helpers

FROZEN_TIME = "2022-02-03 07:00:00"
POWERBI_REPORT_SERVER_USER_DAO_GET_OWNER = "datahub.ingestion.source.powerbi_report_server.report_server.UserDao.get_owner_by_name"


def mock_user(*args, **kwargs):
    user_data = dict(
        urn=f"urn:li:corpuser:User1",
        type=Constant.CORP_USER,
        username="User1",
        properties=dict(active=True, displayName="User1", email="User1@foo.com"),
    )
    return CorpUser.parse_obj(user_data)


def register_mock_api(request_mock):
    api_vs_response = {
        "https://host_port/Reports/api/v2.0/Reports": {
            "method": "GET",
            "status_code": 200,
            "json": {
                "value": [
                    {
                        "Id": "ee56dc21-248a-4138-a446-ee5ab1fc938a",
                        "Name": "Testa",
                        "Description": None,
                        "Path": "/path/to/Testa",
                        "Type": "Report",
                        "Hidden": False,
                        "Size": 1010101,
                        "ModifiedBy": "TEST_USER",
                        "ModifiedDate": str(datetime.now()),
                        "CreatedBy": "TEST_USER",
                        "CreatedDate": str(datetime.now()),
                        "ParentFolderId": "47495172-89ab-455f-a446-fffd3cf239ca",
                        "IsFavorite": False,
                        "ContentType": None,
                        "Content": "",
                        "HasDataSources": True,
                        "Roles": [],
                        "HasSharedDataSets": True,
                        "HasParameters": True,
                    },
                ]
            },
        },
        "https://host_port/Reports/api/v2.0/MobileReports": {
            "method": "GET",
            "status_code": 200,
            "json": {
                "value": [
                    {
                        "Id": "ee56dc21-248a-4138-a446-ee5ab1fc938b",
                        "Name": "Testb",
                        "Description": None,
                        "Path": "/path/to/Testb",
                        "Type": "MobileReport",
                        "Hidden": False,
                        "Size": 1010101,
                        "ModifiedBy": "TEST_USER",
                        "ModifiedDate": str(datetime.now()),
                        "CreatedBy": "TEST_USER",
                        "CreatedDate": str(datetime.now()),
                        "ParentFolderId": "47495172-89ab-455f-a446-fffd3cf239cb",
                        "IsFavorite": False,
                        "ContentType": None,
                        "Content": "",
                        "HasDataSources": True,
                        "Roles": [],
                        "HasSharedDataSets": True,
                        "HasParameters": True,
                        "AllowCaching": True,
                        "Manifest": {"Resources": []},
                    },
                ]
            },
        },
        "https://host_port/Reports/api/v2.0/LinkedReports": {
            "method": "GET",
            "status_code": 200,
            "json": {
                "value": [
                    {
                        "Id": "ee56dc21-248a-4138-a446-ee5ab1fc938c",
                        "Name": "Testc",
                        "Description": None,
                        "Path": "/path/to/Testc",
                        "Type": "LinkedReport",
                        "Hidden": False,
                        "Size": 1010101,
                        "ModifiedBy": "TEST_USER",
                        "ModifiedDate": str(datetime.now()),
                        "CreatedBy": "TEST_USER",
                        "CreatedDate": str(datetime.now()),
                        "ParentFolderId": "47495172-89ab-455f-a446-fffd3cf239cc",
                        "IsFavorite": False,
                        "ContentType": None,
                        "Content": "",
                        "HasDataSources": True,
                        "Roles": [],
                        "HasParameters": True,
                        "Link": "sjfgnk-7134-1234-abcd-ee5axvcv938b",
                    },
                ]
            },
        },
        "https://host_port/Reports/api/v2.0/PowerBIReports": {
            "method": "GET",
            "status_code": 200,
            "json": {
                "value": [
                    {
                        "Id": "ee56dc21-248a-4138-a446-ee5ab1fc938d",
                        "Name": "Testd",
                        "Description": None,
                        "Path": "/path/to/Testd",
                        "Type": "PowerBIReport",
                        "Hidden": False,
                        "Size": 1010101,
                        "ModifiedBy": "TEST_USER",
                        "ModifiedDate": str(datetime.now()),
                        "CreatedBy": "TEST_USER",
                        "CreatedDate": str(datetime.now()),
                        "ParentFolderId": "47495172-89ab-455f-a446-fffd3cf239cd",
                        "IsFavorite": False,
                        "ContentType": None,
                        "Content": "",
                        "HasDataSources": True,
                        "Roles": [],
                    },
                ]
            },
        },
    }

    for url in api_vs_response.keys():
        request_mock.register_uri(
            api_vs_response[url]["method"],
            url,
            json=api_vs_response[url]["json"],
            status_code=api_vs_response[url]["status_code"],
        )


def default_source_config():
    return {
        "username": "foo",
        "password": "bar",
        "workstation_name": "workstation",
        "host_port": "host_port",
        "server_alias": "server_alias",
        "graphql_url": "http://localhost:8080/api/graphql",
        "report_virtual_directory_name": "Reports",
        "report_server_virtual_directory_name": "ReportServer",
        "env": "DEV",
    }


@freeze_time(FROZEN_TIME)
@mock.patch(POWERBI_REPORT_SERVER_USER_DAO_GET_OWNER, side_effect=mock_user)
@mock.patch("requests_ntlm.HttpNtlmAuth")
def test_powerbi_ingest(
    mock_msal, user_mock, pytestconfig, tmp_path, mock_time, requests_mock
):
    test_resources_dir = pytestconfig.rootpath / "tests/integration/powerbi"

    register_mock_api(request_mock=requests_mock)

    pipeline = Pipeline.create(
        {
            "run_id": "powerbi-report-server-test",
            "source": {
                "type": "powerbi-report-server",
                "config": {
                    **default_source_config(),
                },
            },
            "sink": {
                "type": "file",
                "config": {
                    "filename": f"{tmp_path}/powerbi_report_server_mces.json",
                },
            },
        }
    )

    pipeline.run()
    pipeline.raise_from_status()
    mce_out_file = "../powerbi/golden_test_ingest.json"

    mce_helpers.check_golden_file(
        pytestconfig,
        output_path=tmp_path / "powerbi_report_server_mces.json",
        golden_path=f"{test_resources_dir}/{mce_out_file}",
    )