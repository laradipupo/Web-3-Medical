//node src/contracts/contract_interact.js

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

const API_URL = "https://g.w.lavanet.xyz:443/gateway/celo/rpc-http/8d1d8b56bff520c0624511497b416013";

const web3 = createAlchemyWeb3(API_URL);
const contract = JSON.stringify([
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_orderId",
                "type": "uint256"
            }
        ],
        "name": "deliverOrder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_id",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_phone",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_gender",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_dob",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_qualification",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_major",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "_isCertified",
                "type": "bool"
            }
        ],
        "name": "editDoctor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_id",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_phone",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_gender",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_dob",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_height",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_weight",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_houseaddr",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_bloodgroup",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_medicalconditions",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_medication",
                "type": "string"
            }
        ],
        "name": "editPatients",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_id",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_phone",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_gender",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_dob",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_qualification",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "_isCertified",
                "type": "bool"
            }
        ],
        "name": "editPharmaceuticalStores",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "givePermission",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_drugName",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_quantity",
                "type": "uint256"
            }
        ],
        "name": "placeOrder",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "RevokePermission",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_date",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_time",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_diagnosis",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_prescription",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_status",
                "type": "string"
            }
        ],
        "name": "setAppointment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_id",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_phone",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_gender",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_dob",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_qualification",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_major",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "_isCertified",
                "type": "bool"
            }
        ],
        "name": "setDoctor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_latitude",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_longitude",
                "type": "uint256"
            }
        ],
        "name": "setDoctorlocation",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_newPrice",
                "type": "uint256"
            }
        ],
        "name": "setDrugPrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_id",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_phone",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_gender",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_dob",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_height",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_weight",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_houseaddr",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_bloodgroup",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_medicalconditions",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_medication",
                "type": "string"
            }
        ],
        "name": "setPatients",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_latitude",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_longitude",
                "type": "uint256"
            }
        ],
        "name": "setPatientsLocation",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_latitude",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_longitude",
                "type": "uint256"
            }
        ],
        "name": "setPharmaceuticalStoreLocation",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_id",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_phone",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_gender",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_dob",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_qualification",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "_isCertified",
                "type": "bool"
            }
        ],
        "name": "setPharmaciticalStore",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_date",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_time",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_diagnosis",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_prescription",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_status",
                "type": "string"
            }
        ],
        "name": "updateAppointment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "appointmentCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "appointmentList",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "doctorCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "doctorList",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "doctorLocation",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAppointmentCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "getAppointmentPerPatient",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAppointments",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getDoctorCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getDoctors",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getDoctorslocation",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "longitude",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "latitude",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "date",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct Record.Doctorslocation",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPatientCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPatientLocation",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "date",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "longitude",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "latitude",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct Record.Patientslocation",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPatients",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPermissionGrantedCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPharmaceuticalStoreLocation",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "date",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "longitude",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "latitude",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct Record.PharmaceuticalStoresLocation",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPharmaciticalStores",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "patientCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "patientList",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "patientLocation",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "permissionGrantedCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "searchAppointment",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "doctoraddr",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "patientaddr",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "date",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "time",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "prescription",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "diagnosis",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "status",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "creationDate",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct Record.Appointments",
                "name": "",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "phone",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "gender",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "dob",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "qualification",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "major",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "emergencyContact",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "isCertified",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "date",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct Record.Doctors",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "searchAppointmentDate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "searchDoctor",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "phone",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "gender",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "dob",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "qualification",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "major",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "emergencyContact",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "isCertified",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "date",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct Record.Doctors",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "searchDoctorDate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "searchPatientDemographic",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "phone",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "gender",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "height",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "weight",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "dob",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "houseaddr",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "bloodgroup",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "medicalconditions",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "medication",
                        "type": "string"
                    }
                ],
                "internalType": "struct Record.Patients",
                "name": "",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "date",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "longitude",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "latitude",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct Record.Patientslocation",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "searchPatientMedical",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "phone",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "gender",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "height",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "weight",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "dob",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "houseaddr",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "bloodgroup",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "medicalconditions",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "medication",
                        "type": "string"
                    }
                ],
                "internalType": "struct Record.Patients",
                "name": "",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "date",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "longitude",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "latitude",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct Record.Patientslocation",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "searchRecordDate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "storeCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "storeList",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "storeLocation",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
])
const abi = JSON.parse(contract);

const contractAddress = "0xa1d37a715aC5c3f98C3B5279cE416DfaF45Ca3d8";
const medicalContract = new web3.eth.Contract(abi, contractAddress);

async function deliverOrder(orderID) {
    if(await requestPermission()){
        try {
            const result = await medicalContract.methods.deliverOrder(orderID).call();
            return result;
        } catch (error) {
            console.error('Failed to get doctor:', error);
        }
    }
}

async function editDoctor(id,name,phone,gender,dob,qualification,major,isCertified){
    if(await requestPermission()){
        try {
            const result = await medicalContract.methods.editDoctor(id,name,phone,gender,dob,qualification,major,isCertified).call();
            return result;
        } catch (error) {
            console.error('Failed to get doctor:', error);
        }
    }
}

async function editPatients(id,name,phone,gender,dob,height,weight,houseAddress,bloodGroup,medicalConditions,medication){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.editPatients(id, name, phone, gender, dob, height, weight, houseAddress, bloodGroup, medicalConditions, medication).call();
        } catch (error) {
            console.error('Failed to get patient:', error);
        }
    }
}

async function editPharmaceuticalStores(id,name,phone,gender,dob,qualification,isCertified){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.editPharmaceuticalStores(id,name,phone,gender,dob,qualification,isCertified).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function givePermission(address){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.givePermission(address).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function placeOrder(drugName,quantity){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.placeOrder(drugName,quantity).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function RevokePermission(address){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.RevokePermission(address).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function setAppointment(address,data,time,diagnosis,prescription,description,status){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.setAppointment(address,data,time,diagnosis,prescription,description,status).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function setDoctor(id,name,phone,gender,dob,qualification,major,isCertified){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.setDoctor(id,name,phone,gender,dob,qualification,major,isCertified).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function setDoctorLocation(latitude,longitude){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.setDoctorLocation(latitude,longitude).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function setDrugPrice(newPrice){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.setDrugPrice(newPrice).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function setPatients(id,name,phone,gender,dob,height,weight,houseAddress,bloodGroup,medicalConditions,medication){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.setPatients(id,name,phone,gender,dob,height,weight,houseAddress,bloodGroup,medicalConditions,medication).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function setPatientsLocation(latitude,longitude){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.setPatientsLocation(latitude,longitude).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function setPharmaceuticalStoreLocation(latitude,longitude){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.setPharmaceuticalStoreLocation(latitude,longitude).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function setPharmaciticalStore(id,name,phone,gender,dob,qualification,isCertified){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.setPharmaciticalStore(id,name,phone,gender,dob,qualification,isCertified).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function updateAppointment(address,data,time,diagnosis,prescription,description,status){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.updateAppointment(address,data,time,diagnosis,prescription,description,status).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function appointmentCount() {
    if(await requestPermission()){
        try {
            const result = await medicalContract.methods.appointmentCount().call();
            console.log('Doctors:', result);
        } catch (error) {
            console.error('Failed to get doctor:', error);
        }
    }
}

async function appointmentList(count){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.appointmentList(count).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function doctorCount(){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.doctorCount().call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function doctorList(id){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.doctorList(id).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function doctorLocation(id){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.doctorLocation(id).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function getAppointmentCount(count){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.getAppointmentCount(count).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function getAppointmentPerPatient(address){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.getAppointmentPerPatient(address).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function getAppointments(){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.getAppointments().call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function getDoctorCount(){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.getDoctorCount().call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function getDoctors() {
    if(await requestPermission()){
        try {
            const result = await medicalContract.methods.getDoctors().call();
            console.log('Doctors:', result);
        } catch (error) {
            console.error('Failed to get doctor:', error);
        }
    }
}

async function getDoctorsLocation(){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.getDoctorsLocation().call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function getPatientCount(){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.getPatientCount().call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function getPatientLocation(){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.getPatientLocation().call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function getPatients(){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.getPatients().call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function getPermissionGrantedCount(){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.getPermissionGrantedCount().call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function getPharmaceuticalStoreLocation(){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.getPharmaceuticalStoreLocation().call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function getPharmaciticalStores(){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.getPharmaciticalStores().call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function patientCount(){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.patientCount().call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function patientList(id){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.patientList(id).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function patientLocation(id){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.patientLocation(id).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function permissionGrantedCount(){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.permissionGrantedCount().call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function searchAppointment(address){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.searchAppointment(address).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function searchAppointmentDate(address){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.searchAppointmentDate(address).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function searchDoctor(address){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.searchDoctor(address).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function searchDoctorDate(address){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.searchDoctorDate(address).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function searchPatientDemographic(address){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.searchPatientDemographic(address).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function searchPatientMedical(address){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.searchPatientMedical(address).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function searchRecordDate(){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.searchRecordDate().call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function storeCount(){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.storeCount().call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function storeList(id){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.storeList(id).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function storeLocation(id){
    if(await requestPermission()){
        try {
            return await medicalContract.methods.storeLocation(id).call();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

async function requestPermission() {
    try {
        if (window.ethereum) {
            const accounts = await window.ethereum.enable();
            // Metamask is ready to go!
            return true;
        } else {
            // The user doesn't have Metamask installed.
            return false;
        }
    } catch (error) {
        // Handle error. Likely the user rejected the login.
        return false;
    }
}