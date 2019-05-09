import React from 'react'
import BigCalendar from 'react-big-calendar'
import TimeGutter from 'react-big-calendar/lib/TimeGutter'
import dates from 'react-big-calendar/lib/utils/dates'
import ExampleControlSlot from '../ExampleControlSlot'

const events = [
  {
    id: 0,
    title: 'Board meeting',
    start: new Date(2018, 0, 29, 9, 0, 0),
    end: new Date(2018, 0, 29, 13, 0, 0),
    resourceId: 1,
  },
  {
    id: 1,
    title: 'MS training',
    allDay: true,
    start: new Date(2018, 0, 29, 14, 0, 0),
    end: new Date(2018, 0, 29, 16, 30, 0),
    resourceId: 2,
  },
  {
    id: 2,
    title: 'Team lead meeting',
    start: new Date(2018, 0, 29, 8, 30, 0),
    end: new Date(2018, 0, 29, 12, 30, 0),
    resourceId: 3,
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(2018, 0, 30, 7, 0, 0),
    end: new Date(2018, 0, 30, 10, 30, 0),
    resourceId: 4,
  },
]

const resourceMap = [
  { resourceId: 1, resourceTitle: 'Board room' },
  { resourceId: 2, resourceTitle: 'Training room' },
  { resourceId: 3, resourceTitle: 'Meeting room 1' },
  { resourceId: 4, resourceTitle: 'Meeting room 2' },
]

const HorizontalResource = props => {
  const groupedEvents = props.resources.groupEvents(props.events)
  let arr = []
  groupedEvents.forEach(group => {
    arr.push(props.children)
  })
  debugger
  return arr
}

const components = {
  horizontalResource: HorizontalResource,
}

let Resource = ({ localizer }) => (
  <>
    <BigCalendar
      events={events}
      localizer={localizer}
      defaultView={BigCalendar.Views.DAY}
      views={['day', 'work_week']}
      step={60}
      components={components}
      defaultDate={new Date(2018, 0, 29)}
      resources={resourceMap}
      resourceIdAccessor="resourceId"
      resourceTitleAccessor="resourceTitle"
    />
  </>
)

export default Resource
