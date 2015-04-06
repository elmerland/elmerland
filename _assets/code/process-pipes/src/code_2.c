#include <stdio.h>
#include <unistd.h>
#include <string.h>

#define IN 0
#define OUT 1

int main(void) {
  int pipefd[2];
  if (pipe(pipefd) == -1) {
    perror("Couldn't create the pipe");
  }
  int f = fork();
  if (f == -1) {
    perror("Couldn't fork child process");
  } else if (f == 0) {
    // Inside child process
    close(pipefd[IN]);
    char str[] = "Hello, this is world!\n";
    int len = strlen(str) + 1;
    printf("Sending message to parent...\n");
    write(pipefd[OUT], str, len);
  } else {
    // Inside parent process
    close(pipefd[OUT]);
    int len = 80;
    char str_buff[len];
    bzero(str_buff, len); // Zero out buffer
    read(pipefd[IN], str_buff, len);
    printf("Receiving message from child...\n");
    printf("Message: %s", str_buff);
  }
}