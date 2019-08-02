import * as _actions from '../../actions/slack'
import * as _types from '../../constants/slack'
import {
  API_URL
} from '../../config'

/*
  Test for Slack actions.
  General alerts
*/
const actions = {..._actions,..._types}

describe('actions', () => {
  it('should create an action of type GET_SLACK_TEAM_RESET', () => {
    const expectedAction = {
      type: actions.GET_SLACK_TEAM_RESET,
    }
    expect(actions.resetGetSlackTeams().type).toEqual(expectedAction.type)
  })
})

describe('actions', async () => {
  it('should create an action of type GET_SLACK_TEAM_REQUEST, and Return promise in payload', () => {

    let promise = Promise.resolve('slack team fetch response')
    let action = actions.getSlackTeamsRequest(promise)

    expect(action.type).toEqual(actions.GET_SLACK_TEAM_REQUEST)
    return action.payload.then(o => {
      expect(o).toEqual('slack team fetch response')
    })
  })
})

describe('actions', () => {
  it('should create an action of type GET_SLACK_TEAM_FAILED', () => {
    const expectedAction = {
      type: actions.GET_SLACK_TEAM_FAILED,
      payload: 'error that occurred'
    }
    let action = actions.getSlackTeamsError('error that occurred')
    expect(action.type).toEqual(expectedAction.type)
    expect(action.payload).toEqual(expectedAction.payload)
  })
})

describe('actions', () => {
  it('should create an action of type GET_SLACK_TEAM_SUCCESS or GET_SLACK_TEAM_FAILED , and slack in payload', () => {
    let action = actions.getSlackTeamsSuccess([])
    expect(action.type).toEqual(actions.GET_SLACK_TEAM_SUCCESS)
    expect(action.payload).toEqual([])
  })
})

describe('actions', () => {
  it('should create an action of type DELETE_SLACK_LINK_RESET', () => {
    const expectedAction = {
      type: actions.DELETE_SLACK_LINK_RESET,
    }
    expect(actions.resetdeleteSlackLink().type).toEqual(expectedAction.type)
  })
})

describe('actions', async () => {
  it('should create an action of type DELETE_SLACK_LINK_REQUEST, and Return promise in payload', () => {

    let promise = Promise.resolve('slack team delete response')
    let action = actions.deleteSlackLinkRequest(promise)

    expect(action.type).toEqual(actions.DELETE_SLACK_LINK_REQUEST)
  })
})

describe('actions', () => {
  it('should create an action of type DELETE_SLACK_LINK_FAILED', () => {
    const expectedAction = {
      type: actions.DELETE_SLACK_LINK_FAILED,
      payload: 'error that occurred'
    }
    let action = actions.deleteSlackLinkError('error that occurred')
    expect(action.type).toEqual(expectedAction.type)
    expect(action.payload).toEqual(expectedAction.payload)
  })
})

describe('actions', () => {
  it('should create an action of type DELETE_SLACK_LINK_SUCCESS or DELETE_SLACK_LINK_FAILED , and slack team in payload', () => {
    let action = actions.deleteSlackLinkSuccess({})
    expect(action.type).toEqual(actions.DELETE_SLACK_LINK_SUCCESS)
    expect(action.payload).toEqual({})
  })
})


// pagination for Slack Team table

describe('actions', () => {
  it('should create an action of type PAGINATE_NEXT', () => {
      const expectedAction = {
          type: actions.PAGINATE_NEXT,
      }
      let action = actions.paginateNext()
      expect(action.type).toEqual(expectedAction.type)
  })
})
describe('actions', () => {
  it('should create an action of type PAGINATE_PREV', () => {
      const expectedAction = {
          type: actions.PAGINATE_PREV,
      }
      let action = actions.paginatePrev()
      expect(action.type).toEqual(expectedAction.type)
  })
})
describe('actions', () => {
  it('should create an action of type PAGINATE_RESET', () => {
      const expectedAction = {
          type: actions.PAGINATE_RESET,
      }
      let action = actions.paginateReset()
      expect(action.type).toEqual(expectedAction.type)
  })
})
describe('actions', () => {
  it('should dispatch action of type PAGINATE_NEXT', () => {
      let dispatch = (dispatched) => {
          expect(dispatched.type).toEqual(actions.PAGINATE_NEXT)
      }
      let action = actions.paginate('next')(dispatch)
  })
})
describe('actions', () => {
  it('should dispatch action of type PAGINATE_PREV', () => {
      let dispatch = (dispatched) => {
          expect(dispatched.type).toEqual(actions.PAGINATE_PREV)
      }
      let action = actions.paginate('prev')(dispatch)
  })
})
describe('actions', () => {
  it('should dispatch action of type PAGINATE_RESET', () => {
      let dispatch = (dispatched) => {
          expect(dispatched.type).toEqual(actions.PAGINATE_RESET)
      }
      let action = actions.paginate('reset')(dispatch)
  })
})