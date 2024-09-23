function getStudentById(studentId){
    return studentRecords.find(function matchId(record){
        return (studentId == record)
    })
}

function printRecords(recordIds){
    var record = recordIds.map(getStudentById);

    record.sort(function sortByNameAsc(record1,record2){
        if(record.name < record2){
            return -1
        }
        else if (record.name > record2.name){
            return 1
        }
        else{
            return 0
        }
        
    });
}

function paidStudentToEnroll(){
    
}

function remindUnpaid(recordIds){

}




var currentEnrollment = [ 410, 105, 664, 375];

var studentRecords = [
    { id:313, name:"Frank", paid:true},
    { id:410, name:"Suzy", paid:true},
    { id:709, name:"Brian", paid:false},
    { id:105, name:"Henry", paid:false},
    { id:502, name:"Mary", paid:true},
    { id:664, name:"Bob", paid:false},
    { id:250, name:"Peter", paid:true},
    { id:375, name:"Sarah", paid:true},
    { id:867, name:"Greg", paid:false}

]