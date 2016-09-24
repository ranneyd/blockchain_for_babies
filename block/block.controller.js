var model = require('./block.model.js');

exports.createBaby = function(username, contactInfo) {
  // Creates a public and private key
  // Returns the created Baby,
  // but the Baby does not have a username or password
  // contactInfo is really just an address, I suppose.
};

exports.createBabyParent = function(username, password, contactInfo) {
  // Creates a public and private key
  // The created "Baby" is a actually a mature adult, capable
  // of holding a username and password.
  // Adds the contactInfo to the Baby that is returned, also
}

exports.addPermission = function(holder, receiver) {
  // from is a full Baby structure, which contains private key
  // to is a public identifier of the recipient of permissions
  // returns, what, a transaction ID?
};

exports.revokePermission = function(holder, receiver) {
  // ??? Is the owner of permission always the revoker?
  // or can a government admin revoke permission?
}

exports.timeRevoke = function(time, holder, receiver, type) {
  // time -- the time in days from today when the permission is revoked
  // holder -- the person who holds the permissions
  // receiver -- the person who is granted the permission for a limited time
  // type -- the permission type that will be granted and then revoked.
  // returns a transactionid?
}

exports.timePermission = function(time, holder, receiver, type) {
  // time -- time in days from today
  // holder -- the person who holds the permissions
  // receiver -- the person who is granted the permission for a limited time
  // type -- the permission type that will be granted and then revoked.
  // returns a transactionid?
}

exports.accessCheck_WhoseRecordsCanIAccess = function(receiver) {
  // returns the array of persons the receiver has view permissions for
}

exports.accessCheck_WhoCanAccessMyRecords = function(holder) {
  // returns the array of persons who can access the holder's records.
}
