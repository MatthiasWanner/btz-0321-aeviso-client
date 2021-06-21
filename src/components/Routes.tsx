import React from 'react';
import { Route } from 'react-router-dom';
import Users from './Users';
import User from './User';
import Companies from './company/Companies';
import Company from './company/Company';
import Professions from './professions/Professions';
import ProjectList from './project/ProjectList';
import UniqueProject from './project/UniqueProject';
import Records from './records/Records';
import OneRecord from './records/OneRecord';
import HomePage from '../views/HomePage';
import Layout from '../views/Layout';
import FormResult from './records/records1/FormResult';

function Routes(): JSX.Element {
  return (
    <>
      <Route exact path="/" component={Layout} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/companies" component={Companies} />
      <Route path="/companies/:id" component={Company} />
      <Route exact path="/projects" component={ProjectList} />
      <Route path="/projects/:id" component={UniqueProject} />
      <Route exact path="/users" component={Users} />
      <Route path="/users/:id" component={User} />
      <Route path="/professions" component={Professions} />
      <Route exact path="/records" component={Records} />
      <Route path="/records/:id" component={OneRecord} />
      <Route path="/exportéunrapport" component={FormResult} />
    </>
  );
}

export default Routes;
