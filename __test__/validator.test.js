const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);
describe('person handel middleware', () => {

    it('Error 500 person middleware', async () => {
      const response = await request.get('/person');
      expect(response.status).toEqual(500);
  });
   it('get name from user ', async () => {
      const response = await request.get('/person?name=samah'); 
      expect(response.status).toEqual(200);
      expect(typeof response.body).toEqual('object');
  });
  })