export type TaskGroup = {//tylko struktura!
    // icon?: Icon
    name: string
    //tasks: Task[] /*TasksIDs?:uid/string[] */
    taskOrder: number[]
    groups?: TaskGroup[] /*groupsIDs?:uid/string[] */

}