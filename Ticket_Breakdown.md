# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Task 1 Create custom column to store `agentId`

Create a nullable agentId column which acts as a placeholder to hold the custom id.
Create a migration script using `db-migrate` or similar so as to maintain database state.
Task time: 1Hr.

## Task 2 Create function `updateAgentID`

Create a function `updateAgentID` which takes two parameters `agentUsername` and the value for the `agentId`.
we check for the `agentUsername` and accordingly update,If not found throw an error.
Task time: 1Hr.

## Task 3 Unit test for `updateAgentID`

Create test cases for `updateAgentID` function with cases for with/without `agentUsername`
Task time: 1Hr.

## Task 4 Create function `getAgentByAgentID`

Create a function `getAgentByAgentID` which inputs `agentId` and finds the agent return `agent` ,if not found throws an error.
Task time: 1Hr.

## Task 5 Unit Test for `getAgentByAgentID`

Create test cases for `getAgentByAgentID` function with positive and negative test cases of return `agent` information.
Task time: 1Hr.