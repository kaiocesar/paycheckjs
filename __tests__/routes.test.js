const request = require("supertest");
const server = require("../app.js");
const sayTDD = require("../helloJest");

beforeAll(async() => {
	console.log("Starting tdd with JEST");
});

afterAll(()=>{
	server.close();
	console.log("Closed server");
});

describe("Begin of the tests", () => {
	test("Accessing home route and verifying the content", async() => {
		const response = await request(server).get("/");
		expect(response.status).toEqual(200);
		expect(response.text).toContain("hello");
	});
});
