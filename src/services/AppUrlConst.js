export const AppUrlConst={
Organization:()=>'organizations',
Standard:()=>'standards',
Subject:()=>'subjects',
Branch:(orgId)=>`arg/${orgId}/branches`,
Department:(orgId,branchId)=>`arg/${orgId}/branches/${branchId}/departments`,
StdClass:(standardId)=>`standards/${standardId}/classes`,
Student:()=>'students'
}