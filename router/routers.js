const express = require("express");
const router = express.Router();
const connection = require("../db/dbconnect.js");

// first URL : GET (for getting the list of the employees)
router.get("/employees", function (req, resp) {
    connection.query("select * from employee", function (err, data, field) {
        if (err) {
            resp.status(500).send("Data not found : " + JSON.stringify(err));
        } else {
            resp.send(data);
        }
    });
});

// second URL : POST (for inserting the employee details in the DB)
router.post("/employees/:empid", function (req, resp) {
    var empid = req.body.empid;
    var ename = req.body.ename;
    var sal = req.body.sal;
    connection.query("insert into employee values (?,?,?)", [empid, ename, sal], (err, result) => {
        console.log(result);
        if (err) {
            resp.status(500).send("data is not inserted successfully!!!");
        }
        else {
            resp.send(" data is inserted successfully!!!! ");
        }
    });
});

// third URL : PUT (for updation of employee details)
router.put("/employees/:empid", (req, resp) => {
    var empid = req.body.empid;
    var ename = req.body.ename;
    var sal = req.body.sal;
    connection.query("update employee set ename=?, sal=? where empid=?",[ename, sal, empid], (err, result) => {
        console.log(result);
        if (err) {
            resp.status(500).send(" data not updated successfully: ");
        } else {
            resp.send(" data updated successfully!!!! ");
        }
    });
});

// fourth URL : DELETE (for deletion of employee from the DB)
router.delete("/employees/:empid", (req, resp) => {
    var empid = req.body.empid;
    connection.query("delete from employee where empid=?", [empid], (err, result) => {
        console.log(result);
        if (err) {
            resp.status(500).send(" employee not deleted!!!! ");
        } else {
            resp.send(" employee deleted successfully!!!! ");
        }
    });
});

// export the router
module.exports = router;