$(document).ready(function(){
    check_MetaMask();

    var SM_ABI = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tongTien",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "vi",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tien",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "hoten",
                    "type": "string"
                }
            ],
            "name": "CoHocSinhVuaNapTien",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "arrayHocsinh",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "_Address",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_Tien",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_HoTen",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "thuTu",
                    "type": "uint256"
                }
            ],
            "name": "get_one_Hocsinh",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "hocSinhCounter",
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
                    "internalType": "string",
                    "name": "hoten",
                    "type": "string"
                }
            ],
            "name": "napTien",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "tongTien",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    var SM_Address = "0xEda1146e1Ed9FCe5e412C850e5C61784a17db901";
    var currentAccount = null;

    $("#btn_ConnectMM").click(function(){
        connect_MetaMask()
        .then((data)=>{
            currentAccount = data[0];
            $("#currentAddress").html(currentAccount);
            console.log("Current acccount is: " + currentAccount);
        })
        .catch((err)=>{console.log(err);});
    });

    window.ethereum.on("accountsChanged", function(accounts){
        currentAccount = accounts[0];
        $("#currentAddress").html(currentAccount);
        console.log("Current acccount is: " + currentAccount);
    });

});

async function connect_MetaMask(){
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts;
}

function check_MetaMask(){
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        $("#install").hide(0);
        $("#info").show(1000);
    }else{
        console.log('MetaMask is not installed!');
        $("#info").hide(0);
        $("#install").show(1000);
    }
}