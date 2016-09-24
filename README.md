# baby-blockchain
Official repo of the [Blockchain for Babies](http://blockchainforbabies.com) hackathon team.

## Overview
Blockchain For Babies is a federated identity site for medical records.

The identity is powered by OpenID Connect, and is connected to a permissions system powered by a blockchain. When a baby is born, she has an identity created, but medical record viewing privileges are automatically granted to the parent(s), who have their own federated identities.  As the baby grows up, medical record viewing privileges go through automatic changes enforced by blockchain smart contracts, and also some requested actions by the involved parties or the government, which happen through blockchain transactions.

The use of the blockchain results in a secure, auditable source of truth for medical permission transactions. And the federated identities can be used by any or all medical record portals. No longer does a patient have to grant individual portal access.

The system has the following parts:
* BabyID -- the OpenID Connect site that serves two purposes:
  1. Authentication, that the user who she says she is.
  2. Permissioning, where the user can grant access to medical resources to other identities.
* BabyBlock -- code that executes permission transactions on the blockchain
* MedPortal -- a fake medical portal that allows a user to access her own (or her family members') medical records, probably for a specific doctor or practice.
