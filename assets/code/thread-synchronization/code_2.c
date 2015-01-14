#include <stdbool.h>
#include <assert.h>
#include <pthread.h>
#include "int-pipe.h"

bool int_pipe_empty(int_pipe_t *intp) {
  return bounded_buffer_empty(&intp->buf);
}

bool int_pipe_full(int_pipe_t *intp) {
  return bounded_buffer_full(&intp->buf);
}

void int_pipe_init(int_pipe_t *intp) {
  bounded_buffer_init(&intp->buf);
  intp->closed=false;
}

int int_pipe_size(int_pipe_t *intp) {
  return bounded_buffer_size(&intp->buf);
}

void int_pipe_close(int_pipe_t *intp) {
  intp->closed = true;
}

bool int_pipe_closed(int_pipe_t *intp) {
  return intp->closed;
}

int int_pipe_write(int_pipe_t *intp, int n) {
  ...
}

int int_pipe_read(int_pipe_t *intp) {
  ...
}