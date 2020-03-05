node-action

This action checks each image in the commit to detects nudity and other inappropriate content in it.

Usage
See action.yml


` Works fo node 8.x, 10.x, 12.x `
  
>  - uses: actions/checkout@v2
>   - name: Use Node.js ${{ matrix.node-version }}
>      uses: actions/setup-node@v1
>      with:
>        node-version: ${{ matrix.node-version }}
>    - run: npm install
>    - name: run loop
>      run: for filename in images/*; do node app.js "$filename" ; done


License
The scripts and documentation in this project are released under the MIT License

