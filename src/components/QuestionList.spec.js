describe('The question list', () => {
  beforeEach(() => {
    console.log('before each');
  });
  beforeAll(() => {
    console.log('before all');
  });
  afterEach(() => {
    console.log('after each');
  });
  afterAll(() => {
    console.log('after all');
  });
  it('should display a list of items', () => {
    expect(2+2).toEqual(4);
  });
  it('should display a list of items2', () => {
    expect(2+2).toEqual(4);
  });
});

// it.only runs only that test
// it.skip skips that test
// multiple it.only's cancel out