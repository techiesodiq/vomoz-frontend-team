/**
 * Caution: Consider this file when using react-scripts
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import WithLayout from "WithLayout";
import { Main as MainLayout, Minimal as MinimalLayout } from "./layouts";

import {
	Home as HomeView,
	SignUp as SignupView,
	SignIn as SigninView,
	ContactUs as ContactUsView,
	HelpCenter as HelpCenterView,
	HelpCenterArticle as HelpCenterArticleView,
	CompanyTerms as CompanyTermsView,
	NotFound as NotFoundView,
	HelpCenter,
} from "./views";

const Routes = () => {
	return (
		<Switch>
			<Route
				exact
				path="/"
				render={(matchProps) => (
					<WithLayout
						{...matchProps}
						component={HomeView}
						layout={MainLayout}
					/>
				)}
			/>
			<Route
				exact
				path="/signup"
				render={(matchProps) => (
					<WithLayout
						{...matchProps}
						component={SignupView}
						layout={MinimalLayout}
					/>
				)}
			/>
			<Route
				exact
				path="/login"
				render={(matchProps) => (
					<WithLayout
						{...matchProps}
						component={SigninView}
						layout={MinimalLayout}
					/>
				)}
			/>
			<Route
				exact
				path="/contact"
				render={(matchProps) => (
					<WithLayout
						{...matchProps}
						component={ContactUsView}
						layout={MainLayout}
					/>
				)}
			/>
			<Route
				exact
				path="/faqs"
				render={(matchProps) => (
					<WithLayout
						{...matchProps}
						component={HelpCenterView}
						layout={MainLayout}
					/>
				)}
			/>
			<Route
				exact
				path="/faqarticle"
				render={(matchProps) => (
					<WithLayout
						{...matchProps}
						component={HelpCenterArticleView}
						layout={MainLayout}
					/>
				)}
			/>
			<Route
				exact
				path="/termsandconditions"
				render={(matchProps) => (
					<WithLayout
						{...matchProps}
						component={CompanyTermsView}
						layout={MainLayout}
					/>
				)}
			/>
			<Route
				exact
				path="/not-found"
				render={(matchProps) => (
					<WithLayout
						{...matchProps}
						component={NotFoundView}
						layout={MinimalLayout}
					/>
				)}
			/>

			<Redirect to="/not-found-cover" />
		</Switch>
	);
};

export default Routes;
