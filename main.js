n = 50;
m = 50;

center = (n / 2);
document.write('<br />');
for (i = 1; i <= n; i++) {
  for (j = 1; j <= m; j++) {
    if ((i - 1 >= j && i + j <= n + 1 ) || (i + ((n/2)) > center && j > center && i + j <= n + 1)) {
      document.write('1 ');
    } else {
      document.write('0 ');
  }

  } document.write('<br />');
}

