
// the difference between the two projects:

// TG Test Runner has internal Test Flows
// it therefore only uses singular CTF Test Action
// its test_data configs are loaded at Test level
// it therefore cannot tie them to Test Setup level in CTF, only Test level

// NO TEST SETUP CONFIG LAYER

// flow:
// user picks Test Setup in CTF
// user picks Test from CLI options, pick github repo, branch/tag/hash
// user picks Test Data for the Test
// user can edit (some of) the Test config
// user can fill out the Custom UI card


// DTF has no Test Flows
// it expects a CTF Test to have multiple Test Actions
// therefore its tests folder is really a test actions folder
// it allows configs set at Test Setup level in CTF
// it does not need Test level configs

// NO TEST CONFIG LAYER

// flow:
// user picks Test Setup in CTF
// user can edit (some of) the Test Setup config
// user picks Test from CLI options, pick github repo, branch/tag/hash
// user picks Test Data

repos = {
    "dtf": {
        "path": "dtf", // url
        "test_setups_include": [ "test_setups/**/test_setup_data" ],
        "test_suites_include": [ "test_suites/**/test_suite_data" ],
        "tests_include": [ "tests/**/test_data" ],
    },
    "tg_test_runner": {
        "path": "tg_test_runner", // url
        "test_setups_include": [ "test_setups/**/test_setup_data" ],
        "test_suites_include": [ "test_suites/**/test_suite_data" ],
        "tests_include": [ "tests/**/test_data" ],
    },
}

