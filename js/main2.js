let SHEET_ID = '1_goCAnx9eFbY_hBHQpUggbWYQKWuKZrUPWP8s8zgpIM'
let SHEET_TITLE = 'teachers';
let SHEET_RANGE = 'A1:G59'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/'+ SHEET_ID +'/gviz/tq?sheet='+SHEET_TITLE +'&range='+SHEET_RANGE);
let length =58;
let table
let data
let countList = new Array()

let firstcount=0;
let lastpoint=length;
let pageSize =10;
let countPerEachPage =pageSize;
let presentPage =1;
let countOfPages;

let currentStartingPoint =0;
let currentEndingPoing =pageSize;

let previousStartingPoint;
let previousEndingPoint;

let nextStatingPoint;
let nextEndingPoint;

const suapingPoints=(a,b)=>{
    let temp;
    temp = a,
    a=b;
    b=a;

}

function getCode(){
    return document.getElementById('code').value;
}

function goFirstPage(){
    cleaning()
    validatePageCount()
    presentPage =1;
    currentStartingPoint=0;
    currentEndingPoing =10;
   
    loadMyPaginationList();
    console.log("After call of gofirst, ",currentStartingPoint, currentEndingPoing,presentPage)
}

function goNextPage(){
    cleaning()
    validatePageCount()
    presentPage +=1;
currentStartingPoint += 10;
currentEndingPoing += 10;

loadMyPaginationList();
console.log("After call of gonext, ",currentStartingPoint, currentEndingPoing,presentPage)
}

function goPreviousPage(){
    cleaning()
    validatePageCount()
    loadMyPaginationList();
    currentStartingPoint -=10;
    currentEndingPoing -=10;
    presentPage -=1
    console.log("After call of goprevious, ",currentStartingPoint, currentEndingPoing,presentPage)
}
function goLastPage(){
    cleaning()
    validatePageCount()
    loadMyPaginationList();
    currentStartingPoint = length-10;
    currentEndingPoing = length;
    presentPage = getCountOfPages( )
    console.log("After call of last page, ",currentStartingPoint, currentEndingPoing,presentPage)
}

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    data = JSON.parse(rep.substr(47).slice(0,-2)); 
    
    length = data.table.rows.length;
    console.log("This is length ", length)

        table = document.createElement("table");
        table.border = "1";

        //Add the header row.
        var row = table.insertRow(-1);

        //Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "teacher_number";
        row.appendChild(headerCell);

        headerCell = document.createElement("TH");
        headerCell.innerHTML = "Beneficiary_name";
        row.appendChild(headerCell);

        headerCell = document.createElement("TH");
        headerCell.innerHTML = "Bank_Account_Number";
        row.appendChild(headerCell);

        headerCell = document.createElement("TH");
        headerCell.innerHTML = "Code";
        row.appendChild(headerCell);
   
   
    //function for loading pagination functionality
    function loadMyPagination() {
    prepareList();
    loadMyPaginationList();
    }
    window.onload = loadMyPagination;

}
 
)



//function for creating how many how many number per each page
function getCountOfPages() {
    countOfPages=Math.ceil(length / countPerEachPage);
    return countOfPages;
    }


//function for adding how many numbers in total
// function prepareList() {
    
//     countList.push(count);
    
// }
    //function for moving to next page
    const getNextPage=()=> {
    // presentPage += 1;
    if( end<=length){
        start = countPerEachPage + start;
        end = end +countPerEachPage
    }
    
    console.log('The pages start and end')
   
    loadMyPaginationList();
    console.log(start,end, presentPage)
    }
    //function for moving previous page
    function getPreviousPage() {
    // presentPage -= 1;
    if(start>=countPerEachPage)
    {
        start= start -countPerEachPage;
        end = end -countPerEachPage;
    }
     console.log('The pages start and end')
    
    loadMyPaginationList();
    console.log(start,end,presentPage)
    }
    //function for moving to first page
    function getFirstPage() {
        // presentPage = 0;
        start =0;
        end = countPerEachPage;
        loadMyPaginationList();
        console.log(start,end,presentPage)
    }
    //function for moving last page
    function getLastPage() {
    start = length - countPerEachPage;
    end = countPerEachPage;
    // presentPage = countOfPages;
    loadMyPaginationList();
    }

     //function for creating how to move between the pages
     document.getElementById("dvCustomersGrid").innerHTML = ""; 
     function loadMyPaginationList() {  
        document.getElementById("dvCustomersGrid").innerHTML = "";     
        createPageList(currentStartingPoint, currentEndingPoing);
        addPageList = countList.slice(currentStartingPoint, currentEndingPoing);
       
        validatePageCount();
        }

    
    //function for adding numbers to each page
    function createPageList(start, end) {
        console.log(getCode())
        
        
        // document.getElementById("dvCustomersGrid").innerHTML = "";
        for (i = start; i<end; i++) {
                //Add the data row.
                var row = table.insertRow(-1);
              
                let compare =data.table.rows[i].c[5].v

                code =document.getElementById('code').innerHTML
                if(compare==getCode())
                {
    
                // Add the data cells.
                var cell = row.insertCell(-1);
                console.log("This is ", i)
                cell.innerHTML = data.table.rows[i].c[0].v;
    
                cell = row.insertCell(-1);
                cell.innerHTML = data.table.rows[i].c[1].v;
    
                cell = row.insertCell(-1);
                cell.innerHTML = data.table.rows[i].c[2].v;
                cell = row.insertCell(-1);
                cell.innerHTML = data.table.rows[i].c[5].v;
                }

            }
            var dvTable = document.getElementById("dvCustomersGrid");
            dvTable.innerHTML = "";
            dvTable.appendChild(table);
        // document.getElementById("countList").innerHTML = document.getElementById("countList").innerHTML+ addPageList[p] + "<br/>";
    

        }

        function cleaning(){
            document.getElementById("dvCustomersGrid").innerHTML=" "
         }
        //function for validating real time condition like if move to last page, last page disabled etc
        function validatePageCount() {
        document.getElementById("next").disabled = presentPage == countOfPages ? true : false;
        document.getElementById("previous").disabled = presentPage == 1 ? true : false;
        document.getElementById("first").disabled = presentPage == 1 ? true : false;
        document.getElementById("last").disabled = presentPage == countOfPages ? true : false;
        }




        //get countof page
        // getCountOfPages();
        // prepareList()