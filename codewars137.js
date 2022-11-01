function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) throw ERROR;
  return candidate.minSalary * 0.9 <= job.maxSalary;
}
