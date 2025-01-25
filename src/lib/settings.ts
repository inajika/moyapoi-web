/**
 * 日付用のロケールオプション
 *
 * `toLocaleString()`の第二引数で用いることを想定しています。
 */
export const DATE_LOCALE_OPTIONS: object = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour12: false,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};
