#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(int argc, char *argv[]) {
	clock_t begin = clock();

	int test = 2;

	for (int i = 0; i < 10; i++) {
		// test <<= 1;
		test *= 2;
	}

	printf("%d\n", test);

	clock_t end = clock();
	double time = (double)(end - begin) / CLOCKS_PER_SEC;

	printf("Time Spent: %f", time);
}