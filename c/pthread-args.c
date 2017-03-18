#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>

struct args {
	int arg1;
	int arg2;
	char *str;
};

void *runThread(void *arg) {
	printf("Other thread\n");
	struct args *ap;
	int a1, a2;
	char *str;

	ap = (struct args *)arg;

	printf("String is %s\n", ap->str);
	printf("Int args are %d and %d\n", ap->arg1, ap->arg2);

	pthread_exit(NULL);
}

int main(int argc, char *argv[]) {
	printf("Begin pthread create with args\n");
	pthread_t thread;
	struct args *ap;
	int rc;

	ap = (struct args *)malloc(sizeof(struct args));
	ap->arg1 = 1;
	ap->arg2 = 2;
	ap->str = "Dennis";

	rc = pthread_create(&thread, NULL, runThread, (void *)ap);

	if (rc) {
		printf("Failed to create thread");
	}

	pthread_exit(NULL);
}