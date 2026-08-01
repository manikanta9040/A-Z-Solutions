import type { CommitteeMember } from '../types'

interface CommitteeCardProps {
  member: CommitteeMember
}

const CommitteeCard = ({ member }: CommitteeCardProps) => (
  <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 text-center shadow-card transition hover:-translate-y-2">
    <img src={member.image} alt={member.name} className="mx-auto h-24 w-24 rounded-full object-cover" />
    <h3 className="mt-6 text-xl font-semibold text-white">{member.name}</h3>
    <p className="mt-2 text-sm font-medium text-gold">{member.role}</p>
    <p className="mt-2 text-sm text-slate-400">{member.institution}</p>
    <p className="mt-2 text-sm text-slate-500">{member.country}</p>
  </div>
)

export default CommitteeCard
