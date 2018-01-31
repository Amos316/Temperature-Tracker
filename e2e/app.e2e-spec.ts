import { CodingExercisePage } from './app.po';

describe('coding-exercise App', () => {
  let page: CodingExercisePage;

  beforeEach(() => {
    page = new CodingExercisePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
