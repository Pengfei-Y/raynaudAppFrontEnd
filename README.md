# App

The app captures Raynaud attacks. Since multiple people will use it, we need to assign an identification for each participant in the database. The first feature is to generate an identification for each participant and show it on the app when they log in. Secondly, for the Raynauds record, we want to note the time and place of the attacks. Users should be able to edit their input if they make a mistake. For the location, users can choose between "indoor" and "outdoor" options instead of giving an exact location captured by devices. Lastly, the app should provide a report of the attack records from the past seven days.

## Features

- **An identification for the participant (app user)**
  - Ask the participant to input the username **for the first time using the app**.
  - Send the username and device uuid to the server and save in database
  - Since the second time use of the app, the app should remember the username of the participant. Besides, the username should always be shown on top with words like "Hello, xxx"

- **Report attack (Raynauds occurred) on a time (attacks may be reported MORE THAN ONCE in one day)**
  - A date input for attack date
  - A time input for attack time
  - Date and time should be local time
  - A location question: "Are you in the room?" with answer options: "inside"/"outside" (participant can only choose one)
  - Send this record to the RESTFUL BACKEND and save in database
  - Show a list of the day's records in app till next day in case of editing (i.e. in app, at the beginning of the day the records should be empty. Reported records will retain till the end of the day (11:59 PM), and can be edited. On the second day (12:00 AM), the list should be refreshed.
  - Update the record you already created within the day just in case you input the wrongly attack information

- **Raynauds daily report**
  - A bar chart to show the daily number of records reported by a participant past seven days since TODAY

## Technique

You should use the following hybrid mobile frameworks to finish the mobile app part:
- **Angular + Ionic + Capacitor (latest stable version recommended)**

## Screenshot

![Example Image](https://github.com/Pengfei-Y/raynaudAppFrontEnd/blob/main/img/%E6%88%AA%E5%B1%8F2024-05-21%20%E4%B8%8B%E5%8D%883.05.09.png)

![Example Image](https://github.com/Pengfei-Y/raynaudAppFrontEnd/blob/main/img/%E6%88%AA%E5%B1%8F2024-05-21%20%E4%B8%8B%E5%8D%883.05.35.png)

![Example Image](https://github.com/Pengfei-Y/raynaudAppFrontEnd/blob/main/img/%E6%88%AA%E5%B1%8F2024-05-21%20%E4%B8%8B%E5%8D%883.07.03.png)



