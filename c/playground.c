#include <pthread.h>
#include <stdlib.h>
#include <stdio.h>

struct building {
	int floors;
	int residents;
	char *name;
};

void *buildingDetails(void *args) {
	struct building *b;

	b = (struct building *)args;

	printf("We have building %s with %d floors and %d residents\n", b->name, b->floors, b->residents);

	pthread_exit(NULL);
}

int main(int argc, char *argv[]) {
	printf("Begin!\n");
	pthread_t t;
	struct building *city;
	int rc;

	city = (struct building *)malloc(sizeof(struct building));

	city->name = "The Woolshed";
	city->floors = 10;
	city->residents = 100;

	rc = pthread_create(&t, NULL, buildingDetails, (void *)city);

	free(city);

	pthread_exit(NULL);

	return 0;
}