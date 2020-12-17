const { Dropbox } = require('dropbox')

const accessToken = 'sl.Am3FqBv7HfwJl67Lq8tpp5prVIU7UkIDFbRTdlMJP48H1JyTdECZFE7Nj9SyUxcwyIU175-o7sqrQlRRSYEakM-_owyC2kCEz7PjxDVAqgYBbTWq1QwHRL5IC-LEyyW1DBKEUjs'

const dbx = new Dropbox({ accessToken: accessToken })

module.exports = {
  dbx,
}
