#include <stdio.h>
#include <pthread.h>
#define NTHREADS 4
#define REPEATS 1000
//#define USEATOMIC
#ifndef USEATOMIC
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
#endif

unsigned counter = 0;

//pthread_barrier_t barrier;

void* worker(void* arg) {

	for (unsigned i = 0; i < REPEATS; ++i) {
		//pthread_barrier_wait(&barrier);
		#ifdef USEATOMIC
		__sync_fetch_and_add(&counter, 1);
		#else
		pthread_mutex_lock(&mutex);
		counter += 1;
		pthread_mutex_unlock(&mutex);
		#endif
	}

	return NULL;
}

int main(void) {
	pthread_t thread_ids[NTHREADS];
	//pthread_barrier_init(&barrier, NULL, NTHREADS);
	for (size_t i = 0; i < NTHREADS; ++i) {
		pthread_create(thread_ids + i, NULL, worker, NULL);
	}
	for (size_t i = 0; i < NTHREADS; ++i) {
		pthread_join(thread_ids[i], NULL);
	}
	//pthread_barrier_destroy(&barrier);
	printf("Counter: %u\n", counter);
	return 0;
}
