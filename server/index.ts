import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
	type Article {
		slug: String
		title: String
		author: String
		content: String
	}

	type Query {
		articles: [Article]
		articleBySlug(slug: String!): Article
	}

	type Mutation {
		addArticle(title: String!, author: String!, content: String!): Article
	}
`;

const articles = [
	{
		slug: 'hello-world',
		title: 'Hello World',
		content: 'Welcome to my new blog. I hope you like it!',
		author: 'Kate Chopin'
	},
	{
		slug: 'my-new-book',
		title: 'My new book',
		content: "I've got a new book coming out on machine learning F#! You should check it out.",
		author: 'Kate Chopin'
	}
];

const resolvers = {
	Query: {
		articles: () => articles,
		articleBySlug: (_: unknown, { slug }: { slug: string }) =>
			articles.find((article) => article.slug === slug)
	},
	Mutation: {
		addArticle: (
			_: unknown,
			{ title, author, content }: { title: string; author: string; content: string }
		) => {
			const newArticle = {
				slug: title.toLocaleLowerCase().replace(/\s/g, '-'),
				title,
				author,
				content
			};
			articles.push(newArticle);
			return newArticle;
		}
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
