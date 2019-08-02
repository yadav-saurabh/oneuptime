import React from 'react';
import { storiesOf } from '@storybook/react';
import UptimeGraphs from '../../components/UptimeGraphs'

const props = {
    'monitor': {
      'monitor': {
        'createdAt': '2018-10-02T11:34:53.880Z',
        'pollTime': '2018-10-24T07:47:22.327Z',
        'updateTime': '2018-10-23T21:00:01.804Z',
        '_id': '5bb357dde08e6637448de721',
        'createdBy': '5bb356f2e08e6637448de71d',
        'name': 'Home Page',
        'type': 'url',
        'data': {
          'url': 'https://hackerbay.ioss'
        },
        'projectId': '5bb356f7e08e6637448de71e',
        '__v': 0
      },
      'time': [
        {
          'date': '2018-10-24T07:48:33.476Z',
          'monitorId': '5bb357dde08e6637448de721',
          'upTime': 0,
          'downTime': 137
        },
        {
          'date': '2018-10-23T20:59:00.796Z',
          'upTime': 0,
          'downTime': 674,
          '_id': '5bcf8bd1a733947b4e30b795',
          'monitorId': '5bb357dde08e6637448de721',
          'status': 'offline',
          '__v': 0
        },
        {
          'date': '2018-10-22T20:59:00.369Z',
          'upTime': 0,
          'downTime': 947,
          '_id': '5bce3a61782dbd6505113bc0',
          'monitorId': '5bb357dde08e6637448de721',
          'status': 'offline',
          '__v': 0
        },
        {
          'date': '2018-10-19T20:59:00.317Z',
          'upTime': 0,
          'downTime': 453,
          '_id': '5bca45d13e713c424e3517bb',
          'monitorId': '5bb357dde08e6637448de721',
          'status': 'offline',
          '__v': 0
        },
        {
          'date': '2018-10-18T20:59:00.622Z',
          'upTime': 0,
          'downTime': 534,
          '_id': '5bc8f4607d223d0ef835b7fa',
          'monitorId': '5bb357dde08e6637448de721',
          'status': 'offline',
          '__v': 0
        },
        {
          'date': '2018-10-17T20:59:00.079Z',
          'upTime': 0,
          'downTime': 493,
          '_id': '5bc7a2d6073a0f3cd9c15fba',
          'monitorId': '5bb357dde08e6637448de721',
          'status': 'offline',
          '__v': 0
        },
        {
          'date': '2018-10-16T20:59:00.357Z',
          'upTime': 0,
          'downTime': 332,
          '_id': '5bc65166db6be32885a58976',
          'monitorId': '5bb357dde08e6637448de721',
          'status': 'offline',
          '__v': 0
        },
        {
          'date': '2018-10-14T20:59:00.270Z',
          'upTime': 0,
          'downTime': 945,
          '_id': '5bc3ae51bf93117c2942952d',
          'monitorId': '5bb357dde08e6637448de721',
          'status': 'offline',
          '__v': 0
        },
        {
          'date': '2018-10-11T20:59:00.316Z',
          'upTime': 0,
          'downTime': 496,
          '_id': '5bbfb9d3df63b662220fed35',
          'monitorId': '5bb357dde08e6637448de721',
          'status': 'offline',
          '__v': 0
        },
        {
          'date': '2018-10-10T20:59:00.041Z',
          'upTime': 0,
          'downTime': 339,
          '_id': '5bbe686c51353834ff31bffc',
          'monitorId': '5bb357dde08e6637448de721',
          'status': 'offline',
          '__v': 0
        },
        {
          'date': '2018-10-09T20:59:00.791Z',
          'upTime': 0,
          'downTime': 305,
          '_id': '5bbd16de09912e340e80765c',
          'monitorId': '5bb357dde08e6637448de721',
          'status': 'offline',
          '__v': 0
        },
        {
          'date': '2018-10-08T20:59:00.561Z',
          'upTime': 0,
          'downTime': 1423,
          '_id': '5bbbc5548fef6f79c741c6a7',
          'monitorId': '5bb357dde08e6637448de721',
          'status': 'offline',
          '__v': 0
        }
      ],
      'stat': 'offline',
      'totalUptimePercent': 0
    }
  }


storiesOf('Uptime Graph', module)
    .add('With time', () =>
    <UptimeGraphs {...props} />
    )