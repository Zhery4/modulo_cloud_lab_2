import { PropsWithChildren, useEffect, useState } from "react";
import { IMemberDetail } from "./memberDetails.vm";
import { mapMemberDetailFromApiToVm } from "./memberDetails.mapper";
import { getMemberDetails } from "./memberDetails.api";
import { MemberDetails } from "./memberDetails.component";
import { AppLayout } from "../../layouts/app/App.layout";

interface IMemberDetailProps extends PropsWithChildren {
  id: string;
}

export const MemberDetailsContainer = (props: IMemberDetailProps) => {
  const { id } = props;
  const [member, setMember] = useState<IMemberDetail>();

  useEffect(() => {
    getMemberDetails(id).then((response) => {
      const memberMapped = mapMemberDetailFromApiToVm(response.data);
      setMember(memberMapped);
      console.log(memberMapped);
    });
  }, []);
  return <AppLayout>{<MemberDetails member={member!} />}</AppLayout>;
};
