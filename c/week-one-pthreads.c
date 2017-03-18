#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#define NUM_THREADS 5

void *PrintHello(void *threadid) {
	int *tid;
	tid = (int *)threadid;
	printf("Hello World! It's me, thread #%d!\n", *tid);
	pthread_exit(NULL);
}

int main(int argc, char *argv[]) {
	pthread_t threads[NUM_THREADS];
	int rc, t, tids[NUM_THREADS];
	for (t=0; t< NUM_THREADS; t++) {
		printf("In main: creating thread %d\n", t);
		tids[t] = t;
		rc = pthread_create(&threads[t], NULL, PrintHello, (void *)&tids[t]);

		if (rc) {
			printf("ERROR; return code from pthread_create() is %d\n", rc);
			exit(-1);
		}
	}
	pthread_exit(NULL);	
}