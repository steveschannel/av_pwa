import React from "react";
import { Redirect, Link, withRouter } from "react-router-dom";
import { Button, MenuItem, Select } from "@material-ui/core";

export const Nav = ({ history }) => {
  console.log(history);
  //   const handleRouting = (route) => <Redirect to={route} />;

  const handleRouting = (route) => history.push(route);
  return (
    <>
      <Link to="/settings">
        <Button color="primary">Settings</Button>
      </Link>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue={"/giz"}
        className="m-5"
        onChange={(e) => handleRouting(e.target.value)}
      >
        <MenuItem value={"/giz"}>GIZ</MenuItem>
        <MenuItem value={"/saba"}>SABA+</MenuItem>
        <MenuItem value={"/artesanal"}>Artesanal</MenuItem>
        <MenuItem value={"/boya"}>Boya</MenuItem>
        <MenuItem value={"/bomba"}>Bomba</MenuItem>
      </Select>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue={1}
        className="m-5"
      >
        <MenuItem value={1}>HTH</MenuItem>
        <MenuItem value={2}>Lejia</MenuItem>
      </Select>
    </>
  );
};

const NavContainer = withRouter(Nav);

export default NavContainer;
