export function getRangePages(
  page: number,
  pagesCount: number,
  setLeftPortion: (value: React.SetStateAction<number>) => void,
  setRightPortion: (value: React.SetStateAction<number>) => void,
): void {
  if (page === pagesCount) {
    setLeftPortion(page - 4);
  } else if (page === pagesCount - 1) {
    setLeftPortion(page - 3);
  } else {
    setLeftPortion(page - 2);
  }

  if (page === 1) {
    setRightPortion(page + 4);
  } else if (page === 2) {
    setRightPortion(page + 3);
  } else {
    setRightPortion(page + 2);
  }
}
