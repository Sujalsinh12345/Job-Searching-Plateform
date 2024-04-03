import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import Welcome, { ErrorPage } from "./component/Welcome";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Logout from "./component/Logout";
import Signup from "./component/Signup";
import Home from "./component/Home";
import Applications from "./component/Applications";
import Profile from "./component/Profile";
import CreateJobs from "./component/recruiter/CreateJobs";
import MyJobs from "./component/recruiter/MyJobs";
import JobApplications from "./component/recruiter/JobApplications";
import AcceptedApplicants from "./component/recruiter/AcceptedApplicants";
import MessagePopup from "./lib/MessagePopup";

const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "98vh",
    paddingTop: "64px",
    boxSizing: "border-box",
    width: "100%",
  },
}));

export const SetPopupContext = createContext();

function App() {
  const classes = useStyles();
  const [popup, setPopup] = useState({
    open: false,
    severity: "",
    message: "",
  });

  return (
    <SetPopupContext.Provider value={setPopup}>
      <Grid container direction="column">
        <Grid item xs>
          <Navbar />
        </Grid>
        <Grid container direction="column" justifyContent="center"></Grid>
        <Grid item className={classes.body}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/home" element={<Home />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/addjob" element={<CreateJobs />} />
            <Route path="/myjobs" element={<MyJobs />} />
            <Route path="/job/applications/:jobId" element={<JobApplications />} />
            <Route path="/employees" element={<AcceptedApplicants />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Grid>
      </Grid>
      <MessagePopup
        open={popup.open}
        setOpen={(status) =>
          setPopup({
            ...popup,
            open: status,
          })
        }
        severity={popup.severity}
        message={popup.message}
      />
    </SetPopupContext.Provider>
  );
}

export default App;
