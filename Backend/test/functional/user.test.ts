describe('Beach user functional tests', () => {
  it('should return a user with just a few times', async () => {
    const { body, status } = await global.testRequest.get('/user/signup');

    expect(status).toBe(200);
    expect(body).toEqual({
        name: 'Fulano de Teste',
        phone: '(11) 91234-5678',
        token: 'token generated valid for 1 day',
    });
  });
});
