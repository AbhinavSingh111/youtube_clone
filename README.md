- Head
- Body
    - side bar
        - menu items
    - main container
        - buttons list
        - videoContainer
            - VideoCards

        - watch page


- added toggle ham menu feature using redux
-button comp >  buttonList , fetch api data from yt api , video cards


bug: in yt search , the search results are stored in reducx store . I am making it a conditional display that is i have data in the search result slice , then display the slice data , if not display the home page data(ie most pop vids).
so when i click home button on the sidebar , the search data is deleted , and the home data is displayed.
Not sure if i should cache the search results for a longer time.

Also: feature to be implemented: clicking on the search suggestions and then displaying those results.

bug : when going back from the watch page the chat data should be deleted , until feature to combine it with videos marked as live are not attatched to it