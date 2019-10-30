const { gql } = require("apollo-server");

const typeDefs = gql`
	# Your schema will go here

	type Query {
		launches: [Launch]!
		launch(id: ID!): Launch
		# Queries for the current user
		me: User
	}

	type Launch {
		id: ID!
		site: String
		mission: Mission
		rocket: Rocket
		isBooked: Boolean!
	}
`;

module.exports = typeDefs;
