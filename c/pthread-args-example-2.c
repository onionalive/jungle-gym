#include <pthread.h>
#include <stdlib.h>
#include <stdio.h>

#define NUM_THREADS 2

// create struct
struct vehicle {
	int wheels;
	int doors;
	char *name;
};

// create func for threads to run 
void *callThread(void *args) {
	struct vehicle *v;

	v = (struct vehicle *)args;
	printf("Success found %s with %d doors and %d wheels.\n", v->name, v->doors, v->wheels);

	int val = doorPlusWheels(v);
	printf("Door + wheels = %d\n", val);

	pthread_exit(NULL);
}

int doorPlusWheels(struct vehicle *v) {
	int total = v->wheels + v->doors;

	return total;
}

// main 
int main(int argc, char *argv[]) {
	pthread_t threads[NUM_THREADS];
	int rc, i;
	struct vehicle *vehicles[NUM_THREADS];
	
	struct vehicle *car = (struct vehicle *)malloc(sizeof(struct vehicle));
	car->wheels = 4;
	car->doors = 4;
	car->name = "Toyota";

	struct vehicle *bike = (struct vehicle *)malloc(sizeof(struct vehicle));
	bike->wheels = 2;
	bike->doors = 0;
	bike->name = "Harley Davidson";
	// declare thread and tid
	printf("Main thread\n");

	vehicles[0] = car;
	vehicles[1] = bike;

	printf("Vehicle 1 %s\n", vehicles[0]->name);
	printf("Vehicle 2 %s\n", vehicles[1]->name);

	for (i=0; i < NUM_THREADS; i++) {
		rc = pthread_create(&threads[i], NULL, callThread, (void *)vehicles[i]);

		if (rc) {
			printf("Thread creation failed");
		}
	}
	pthread_exit(NULL);
	return 0;
}