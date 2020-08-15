const generateLink = require('./link');

test('chat link generation', () => {
  const generatedLink = generateLink();
  expect(generatedLink).toMatchObject({
    hash: expect.any(String),
    link: expect.any(String),
    absoluteLink: expect.any(String)
  });
});
