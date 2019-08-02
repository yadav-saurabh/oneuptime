import React from 'react';
import { storiesOf, action } from '@storybook/react';
import SlackTeamItem from '../../../components/slack/SlackTeamItem'

import { Provider } from 'react-redux';
import {state, mockStore} from '../../redux_mock';

localStorage.setItem('id', '5b1c0c29cb06cc23b132db07');
const store = mockStore(state);

const props = {
    'currentProject': {
        'users': [{
            'userId': '5b1c0c29cb06cc23b132db07',
            'role': 'Administrator',
            '_id': '5b5b3cd6759d8814a7162677'
        }],
        'createdAt': '2018-07-27T15:40:06.071Z',
        '_id': '5b5b3cd6759d8814a7162676',
        'name': 'Test',
        'apiKey': '55e00b80-91b3-11e8-bfeb-a367ac6590d9',
        'stripePlanId': 'plan_CpIZEEfT4YFSvF',
        'stripeSubscriptionId': 'sub_DJANP4LyBQh84J',
        'stripeMeteredSubscriptionId': 'sub_DJANLxwb0jK9An',
        '__v': 0
    },
    'data': 
    {
        'monitors': [
            {
            'createdAt': '2018-09-25T07:17:22.109Z',
            'pollTime': '2018-09-25T16:12:21.716Z',
            'updateTime': '2018-09-25T07:17:22.109Z',
            '_id': '5ba9e102135d59258e5537b5',
            'createdBy': '5b9283dbc5d4132324cd92e1',
            'name': 'Unizonn',
            'type': 'url',
            'data': {
                'url': 'http://unizon.co.uk'
            },
            'projectId': '5b9283e1c5d4132324cd92e2',
            '__v': 0
            },
            {
            'createdAt': '2018-09-24T11:05:31.577Z',
            'pollTime': '2018-09-25T16:12:21.716Z',
            'updateTime': '2018-09-24T11:05:31.577Z',
            '_id': '5ba8c4fb70db043291facc8b',
            'createdBy': '5b9283dbc5d4132324cd92e1',
            'name': 'Test 2',
            'type': 'url',
            'data': {
                'url': 'http://sjdshdjhdjshdj.com'
            },
            'projectId': '5b9283e1c5d4132324cd92e2',
            '__v': 0
            }
        ],
        '_id': '5baa16d7257dac3486eeab7e',
        'projectId': {
            'users': [
            {
                'userId': '5b9283dbc5d4132324cd92e1',
                'role': 'Administrator',
                '_id': '5b9283e1c5d4132324cd92e3'
            }
            ],
            'createdAt': '2018-09-07T13:57:53.039Z',
            '_id': '5b9283e1c5d4132324cd92e2',
            'name': 'Demo Project',
            'apiKey': '03a74810-b2a6-11e8-968d-bd7238e8faae',
            'stripePlanId': 'plan_CpIUcLDhD1HKKA',
            'stripeSubscriptionId': 'sub_DYsDt2GNgkhCtg',
            'stripeMeteredSubscriptionId': 'sub_DYsDZuTuf6YnuU',
            '__v': 0
        },
        'createdBy': {
            'onCallAlert': [],
            'createdAt': '2018-09-07T13:57:47.747Z',
            'lastActive': '2018-09-25T16:12:37.921Z',
            '_id': '5b9283dbc5d4132324cd92e1',
            'name': 'Rex Raphael',
            'email': 'juicycleff@gmail.com',
            'password': '$2b$10$HxIjRcTEa441YPZNp3bt.etH7KQkLdo4wlPXjxwruxefetAqV6B/.',
            'companyName': 'Boldsofts',
            'companyRole': 'Boldsofts',
            'referral': 'Google',
            'companyPhoneNumber': '+2348162611815',
            'coupon': null,
            'jwtRefreshToken': '5i9FGzQWkFlXutLsCud0lyoAlOmVVrXJcI8kFtC84ViqXkTBug8IOHWxquhnFy1w9kK323OhUm32lsMyfAW8mIzQisnenD184HhzWqcbBPmeQJ36YX4qpRzBruYesKvMsRNcRNwIC9UdmxwAduP2T9FZKOFB1DChjYttPk5jJkdWzZDsKI9OAToO1tbQDskm3gpxuhhXLRxh40P7qcP4bEQcQetjVq9vtwvouMDbPGZuLYO1Iuq7xgp74H7fCrbJ',
            'stripeCustomerId': 'cus_DYsD7P2LbpMwsb',
            '__v': 0
        },
        'integrationType': 'webhook',
        'data': {
            'userId': '5b9283dbc5d4132324cd92e1',
            'endpoint': 'http://localhost:3002/webhook/test',
            'monitorIds': [
            '5ba9e102135d59258e5537b5'
            ]
        },
        '__v': 0
    },
    'monitors': [{
            createdAt: '2018-09-25T07:17:22.109Z',
            pollTime: '2018-09-25T16:12:21.716Z',
            updateTime: '2018-09-25T07:17:22.109Z',
            _id: '5ba9e102135d59258e5537b5',
            createdBy: '5b9283dbc5d4132324cd92e1',
            name: 'Unizonn',
            type: 'url',
            data: {
                url: 'http://unizon.co.uk'
            },
            projectId: '5b9283e1c5d4132324cd92e2',
            __v: 0,
            time: [{
                date: '2018-09-25T16:12:38.208Z',
                monitorId: '5ba9e102135d59258e5537b5',
                upTime: 0,
                downTime: 174,
                status: 'offline'
            }],
            count: 12,
            incidents: [{
                    acknowledged: false,
                    resolved: false,
                    internalNote: '',
                    investigationNote: '',
                    createdAt: '2018-09-25T16:03:18.394Z',
                    _id: '5baa5c46cfa91d110ec607de',
                    projectId: '5b9283e1c5d4132324cd92e2',
                    monitorId: '5ba9e102135d59258e5537b5',
                    createdBy: null,
                    __v: 0
                },
                {
                    acknowledged: true,
                    resolved: true,
                    internalNote: '',
                    investigationNote: '',
                    createdAt: '2018-09-25T11:43:19.390Z',
                    _id: '5baa1f57e014d93df4d29e4f',
                    projectId: '5b9283e1c5d4132324cd92e2',
                    monitorId: '5ba9e102135d59258e5537b5',
                    createdBy: null,
                    __v: 0,
                    acknowledgedAt: '2018-09-25T16:03:06.938Z',
                    acknowledgedBy: {
                        onCallAlert: [],
                        createdAt: '2018-09-07T13:57:47.747Z',
                        lastActive: '2018-09-25T16:12:38.077Z',
                        _id: '5b9283dbc5d4132324cd92e1',
                        name: 'Rex Raphael',
                        email: 'juicycleff@gmail.com',
                        password: '$2b$10$HxIjRcTEa441YPZNp3bt.etH7KQkLdo4wlPXjxwruxefetAqV6B/.',
                        companyName: 'Boldsofts',
                        companyRole: 'Boldsofts',
                        referral: 'Google',
                        companyPhoneNumber: '+2348162611815',
                        coupon: null,
                        jwtRefreshToken: '5i9FGzQWkFlXutLsCud0lyoAlOmVVrXJcI8kFtC84ViqXkTBug8IOHWxquhnFy1w9kK323OhUm32lsMyfAW8mIzQisnenD184HhzWqcbBPmeQJ36YX4qpRzBruYesKvMsRNcRNwIC9UdmxwAduP2T9FZKOFB1DChjYttPk5jJkdWzZDsKI9OAToO1tbQDskm3gpxuhhXLRxh40P7qcP4bEQcQetjVq9vtwvouMDbPGZuLYO1Iuq7xgp74H7fCrbJ',
                        stripeCustomerId: 'cus_DYsD7P2LbpMwsb',
                        __v: 0
                    },
                    resolvedAt: '2018-09-25T16:03:06.938Z',
                    resolvedBy: {
                        onCallAlert: [],
                        createdAt: '2018-09-07T13:57:47.747Z',
                        lastActive: '2018-09-25T16:12:38.077Z',
                        _id: '5b9283dbc5d4132324cd92e1',
                        name: 'Rex Raphael',
                        email: 'juicycleff@gmail.com',
                        password: '$2b$10$HxIjRcTEa441YPZNp3bt.etH7KQkLdo4wlPXjxwruxefetAqV6B/.',
                        companyName: 'Boldsofts',
                        companyRole: 'Boldsofts',
                        referral: 'Google',
                        companyPhoneNumber: '+2348162611815',
                        coupon: null,
                        jwtRefreshToken: '5i9FGzQWkFlXutLsCud0lyoAlOmVVrXJcI8kFtC84ViqXkTBug8IOHWxquhnFy1w9kK323OhUm32lsMyfAW8mIzQisnenD184HhzWqcbBPmeQJ36YX4qpRzBruYesKvMsRNcRNwIC9UdmxwAduP2T9FZKOFB1DChjYttPk5jJkdWzZDsKI9OAToO1tbQDskm3gpxuhhXLRxh40P7qcP4bEQcQetjVq9vtwvouMDbPGZuLYO1Iuq7xgp74H7fCrbJ',
                        stripeCustomerId: 'cus_DYsD7P2LbpMwsb',
                        __v: 0
                    }
                },
                {
                    acknowledged: true,
                    resolved: true,
                    internalNote: '',
                    investigationNote: '',
                    createdAt: '2018-09-25T11:33:23.309Z',
                    _id: '5baa1d037f4f883ad8ca4642',
                    projectId: '5b9283e1c5d4132324cd92e2',
                    monitorId: '5ba9e102135d59258e5537b5',
                    createdBy: null,
                    __v: 0,
                    acknowledgedAt: '2018-09-25T11:38:52.989Z',
                    acknowledgedBy: {
                        onCallAlert: [],
                        createdAt: '2018-09-07T13:57:47.747Z',
                        lastActive: '2018-09-25T16:12:38.077Z',
                        _id: '5b9283dbc5d4132324cd92e1',
                        name: 'Rex Raphael',
                        email: 'juicycleff@gmail.com',
                        password: '$2b$10$HxIjRcTEa441YPZNp3bt.etH7KQkLdo4wlPXjxwruxefetAqV6B/.',
                        companyName: 'Boldsofts',
                        companyRole: 'Boldsofts',
                        referral: 'Google',
                        companyPhoneNumber: '+2348162611815',
                        coupon: null,
                        jwtRefreshToken: '5i9FGzQWkFlXutLsCud0lyoAlOmVVrXJcI8kFtC84ViqXkTBug8IOHWxquhnFy1w9kK323OhUm32lsMyfAW8mIzQisnenD184HhzWqcbBPmeQJ36YX4qpRzBruYesKvMsRNcRNwIC9UdmxwAduP2T9FZKOFB1DChjYttPk5jJkdWzZDsKI9OAToO1tbQDskm3gpxuhhXLRxh40P7qcP4bEQcQetjVq9vtwvouMDbPGZuLYO1Iuq7xgp74H7fCrbJ',
                        stripeCustomerId: 'cus_DYsD7P2LbpMwsb',
                        __v: 0
                    },
                    resolvedAt: '2018-09-25T11:42:50.645Z',
                    resolvedBy: {
                        onCallAlert: [],
                        createdAt: '2018-09-07T13:57:47.747Z',
                        lastActive: '2018-09-25T16:12:38.077Z',
                        _id: '5b9283dbc5d4132324cd92e1',
                        name: 'Rex Raphael',
                        email: 'juicycleff@gmail.com',
                        password: '$2b$10$HxIjRcTEa441YPZNp3bt.etH7KQkLdo4wlPXjxwruxefetAqV6B/.',
                        companyName: 'Boldsofts',
                        companyRole: 'Boldsofts',
                        referral: 'Google',
                        companyPhoneNumber: '+2348162611815',
                        coupon: null,
                        jwtRefreshToken: '5i9FGzQWkFlXutLsCud0lyoAlOmVVrXJcI8kFtC84ViqXkTBug8IOHWxquhnFy1w9kK323OhUm32lsMyfAW8mIzQisnenD184HhzWqcbBPmeQJ36YX4qpRzBruYesKvMsRNcRNwIC9UdmxwAduP2T9FZKOFB1DChjYttPk5jJkdWzZDsKI9OAToO1tbQDskm3gpxuhhXLRxh40P7qcP4bEQcQetjVq9vtwvouMDbPGZuLYO1Iuq7xgp74H7fCrbJ',
                        stripeCustomerId: 'cus_DYsD7P2LbpMwsb',
                        __v: 0
                    }
                }
            ],
            skip: 0,
            limit: 3,
            responseTime: 0,
            uptimePercent: 0,
            status: 'offline',
            error: null,
            success: false,
            requesting: false
        },
        {
            createdAt: '2018-09-24T11:05:31.577Z',
            pollTime: '2018-09-25T16:12:21.716Z',
            updateTime: '2018-09-24T11:05:31.577Z',
            _id: '5ba8c4fb70db043291facc8b',
            createdBy: '5b9283dbc5d4132324cd92e1',
            name: 'Test 2',
            type: 'url',
            data: {
                url: 'http://sjdshdjhdjshdj.com'
            },
            projectId: '5b9283e1c5d4132324cd92e2',
            __v: 0,
            time: [{
                date: '2018-09-25T16:12:38.290Z',
                monitorId: '5ba8c4fb70db043291facc8b',
                upTime: 0,
                downTime: 456,
                status: 'offline'
            }],
            count: 16,
            incidents: [{
                    acknowledged: false,
                    resolved: false,
                    internalNote: '',
                    investigationNote: '',
                    createdAt: '2018-09-25T16:03:18.376Z',
                    _id: '5baa5c46cfa91d110ec607dd',
                    projectId: '5b9283e1c5d4132324cd92e2',
                    monitorId: '5ba8c4fb70db043291facc8b',
                    createdBy: null,
                    __v: 0
                },
                {
                    acknowledged: true,
                    resolved: true,
                    internalNote: '',
                    investigationNote: '',
                    createdAt: '2018-09-25T11:43:19.140Z',
                    _id: '5baa1f57e014d93df4d29e4c',
                    projectId: '5b9283e1c5d4132324cd92e2',
                    monitorId: '5ba8c4fb70db043291facc8b',
                    createdBy: null,
                    __v: 0,
                    acknowledgedAt: '2018-09-25T16:02:31.840Z',
                    acknowledgedBy: {
                        onCallAlert: [],
                        createdAt: '2018-09-07T13:57:47.747Z',
                        lastActive: '2018-09-25T16:12:38.077Z',
                        _id: '5b9283dbc5d4132324cd92e1',
                        name: 'Rex Raphael',
                        email: 'juicycleff@gmail.com',
                        password: '$2b$10$HxIjRcTEa441YPZNp3bt.etH7KQkLdo4wlPXjxwruxefetAqV6B/.',
                        companyName: 'Boldsofts',
                        companyRole: 'Boldsofts',
                        referral: 'Google',
                        companyPhoneNumber: '+2348162611815',
                        coupon: null,
                        jwtRefreshToken: '5i9FGzQWkFlXutLsCud0lyoAlOmVVrXJcI8kFtC84ViqXkTBug8IOHWxquhnFy1w9kK323OhUm32lsMyfAW8mIzQisnenD184HhzWqcbBPmeQJ36YX4qpRzBruYesKvMsRNcRNwIC9UdmxwAduP2T9FZKOFB1DChjYttPk5jJkdWzZDsKI9OAToO1tbQDskm3gpxuhhXLRxh40P7qcP4bEQcQetjVq9vtwvouMDbPGZuLYO1Iuq7xgp74H7fCrbJ',
                        stripeCustomerId: 'cus_DYsD7P2LbpMwsb',
                        __v: 0
                    },
                    resolvedAt: '2018-09-25T16:02:59.628Z',
                    resolvedBy: {
                        onCallAlert: [],
                        createdAt: '2018-09-07T13:57:47.747Z',
                        lastActive: '2018-09-25T16:12:38.077Z',
                        _id: '5b9283dbc5d4132324cd92e1',
                        name: 'Rex Raphael',
                        email: 'juicycleff@gmail.com',
                        password: '$2b$10$HxIjRcTEa441YPZNp3bt.etH7KQkLdo4wlPXjxwruxefetAqV6B/.',
                        companyName: 'Boldsofts',
                        companyRole: 'Boldsofts',
                        referral: 'Google',
                        companyPhoneNumber: '+2348162611815',
                        coupon: null,
                        jwtRefreshToken: '5i9FGzQWkFlXutLsCud0lyoAlOmVVrXJcI8kFtC84ViqXkTBug8IOHWxquhnFy1w9kK323OhUm32lsMyfAW8mIzQisnenD184HhzWqcbBPmeQJ36YX4qpRzBruYesKvMsRNcRNwIC9UdmxwAduP2T9FZKOFB1DChjYttPk5jJkdWzZDsKI9OAToO1tbQDskm3gpxuhhXLRxh40P7qcP4bEQcQetjVq9vtwvouMDbPGZuLYO1Iuq7xgp74H7fCrbJ',
                        stripeCustomerId: 'cus_DYsD7P2LbpMwsb',
                        __v: 0
                    }
                },
                {
                    acknowledged: true,
                    resolved: true,
                    internalNote: '',
                    investigationNote: '',
                    createdAt: '2018-09-25T11:40:11.849Z',
                    _id: '5baa1e9bdae80e3d177196d4',
                    projectId: '5b9283e1c5d4132324cd92e2',
                    monitorId: '5ba8c4fb70db043291facc8b',
                    createdBy: null,
                    __v: 0,
                    acknowledgedAt: '2018-09-25T11:42:56.751Z',
                    acknowledgedBy: {
                        onCallAlert: [],
                        createdAt: '2018-09-07T13:57:47.747Z',
                        lastActive: '2018-09-25T16:12:38.077Z',
                        _id: '5b9283dbc5d4132324cd92e1',
                        name: 'Rex Raphael',
                        email: 'juicycleff@gmail.com',
                        password: '$2b$10$HxIjRcTEa441YPZNp3bt.etH7KQkLdo4wlPXjxwruxefetAqV6B/.',
                        companyName: 'Boldsofts',
                        companyRole: 'Boldsofts',
                        referral: 'Google',
                        companyPhoneNumber: '+2348162611815',
                        coupon: null,
                        jwtRefreshToken: '5i9FGzQWkFlXutLsCud0lyoAlOmVVrXJcI8kFtC84ViqXkTBug8IOHWxquhnFy1w9kK323OhUm32lsMyfAW8mIzQisnenD184HhzWqcbBPmeQJ36YX4qpRzBruYesKvMsRNcRNwIC9UdmxwAduP2T9FZKOFB1DChjYttPk5jJkdWzZDsKI9OAToO1tbQDskm3gpxuhhXLRxh40P7qcP4bEQcQetjVq9vtwvouMDbPGZuLYO1Iuq7xgp74H7fCrbJ',
                        stripeCustomerId: 'cus_DYsD7P2LbpMwsb',
                        __v: 0
                    },
                    resolvedAt: '2018-09-25T11:43:04.785Z',
                    resolvedBy: {
                        onCallAlert: [],
                        createdAt: '2018-09-07T13:57:47.747Z',
                        lastActive: '2018-09-25T16:12:38.077Z',
                        _id: '5b9283dbc5d4132324cd92e1',
                        name: 'Rex Raphael',
                        email: 'juicycleff@gmail.com',
                        password: '$2b$10$HxIjRcTEa441YPZNp3bt.etH7KQkLdo4wlPXjxwruxefetAqV6B/.',
                        companyName: 'Boldsofts',
                        companyRole: 'Boldsofts',
                        referral: 'Google',
                        companyPhoneNumber: '+2348162611815',
                        coupon: null,
                        jwtRefreshToken: '5i9FGzQWkFlXutLsCud0lyoAlOmVVrXJcI8kFtC84ViqXkTBug8IOHWxquhnFy1w9kK323OhUm32lsMyfAW8mIzQisnenD184HhzWqcbBPmeQJ36YX4qpRzBruYesKvMsRNcRNwIC9UdmxwAduP2T9FZKOFB1DChjYttPk5jJkdWzZDsKI9OAToO1tbQDskm3gpxuhhXLRxh40P7qcP4bEQcQetjVq9vtwvouMDbPGZuLYO1Iuq7xgp74H7fCrbJ',
                        stripeCustomerId: 'cus_DYsD7P2LbpMwsb',
                        __v: 0
                    }
                }
            ],
            skip: 0,
            limit: 3,
            responseTime: 0,
            uptimePercent: 0,
            status: 'offline',
            error: null,
            success: false,
            requesting: false
        }
    ],
    'deleteWebHook': action('deleteWebHook'),
    'openModal': action('openModal')
}

storiesOf('WebHook', module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .addDecorator(story => (
        <div style={{ margin: '5%' }} >
         {story()}
        </div>
    ))
    .add('WebHook Item', () =>
        <SlackTeamItem {...props} />
    )
    
