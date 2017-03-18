#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define NUM_THREADS 4
#define LOOPS 100000

int counter;
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;

void* worker() {
	for (int i = 0; i < LOOPS; i++) {
		pthread_mutex_lock(&mutex);
		counter++;
		pthread_mutex_unlock(&mutex);
	}
	pthread_exit(NULL);
}

// using try_lock
void* worker() {
	for (int i = 0; i < LOOPS; i++) {
		while (pthread_mutex_trylock(&mutex) != 0) {
			// wait
		} 

		counter++;
		pthread_mutex_unlock(&mutex);
	}
	pthread_exit(NULL);
}

int main(int argc, char *argv[]) {
	clock_t begin = clock();
	pthread_t t[NUM_THREADS];
	int rc;

	counter = 0;

	for (int i = 0; i < NUM_THREADS; i++) {
		rc = pthread_create(&t[i], NULL, worker, NULL);

		if (rc) {
			printf("Thread #%d failed\n", i);
		}
	}

	for (int i = 0; i < NUM_THREADS; i++) {
		pthread_join(t[i], NULL);
	}

	printf("%d\n", counter);
	clock_t end = clock();
	double time = (double)(end - begin) / CLOCKS_PER_SEC;

	printf("Time Spent: %f", time);

	return 0;	
}

