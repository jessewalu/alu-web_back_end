import { expect } from 'chai';
import sinon from 'sinon';
import kue from 'kue';

import createPushNotificationsJobs from './8-job';

describe('createPushNotificationsJobs', () => {
  const queue = kue.createQueue();
  let consoleSpy;

  before(() => {
    queue.testMode.enter();
  });

  after(() => {
    queue.testMode.clear();
    queue.testMode.exit();
  });

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('display a error message if jobs is not an array', () => {
    expect(() => createPushNotificationsJobs({}, queue)).to.throw(
      Error,
      'Jobs is not an array',
    );
  });

  it('create two new jobs to the queue', () => {
    const mockJobs = [
      {
        phoneNumber: '4153518780',
        message: 'This is the code 1234 to verify your account',
      },
      {
        phoneNumber: '4153518781',
        message: 'This is the code 4562 to verify your account',
      },
    ];

    createPushNotificationsJobs(mockJobs, queue);

    expect(queue.testMode.jobs.length).to.equal(2);
    expect(consoleSpy.calledWith('Notification job created: 1')).to.be.true;
    expect(consoleSpy.calledWith('Notification job created: 2')).to.be.true;
  });

  it('has the correct type and data for each job', () => {
    queue.testMode.jobs.forEach((job, index) => {
      expect(job.type).to.equal('push_notification_code_3');
      expect(job.data.phoneNumber).to.equal(
        index === 0 ? '4153518780' : '4153518781',
      );
    });
  });
});
