"use client"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type Team = {
  teamName: string
  totalScore: string
  averageAccuracy: string
  teamId: string
  collegeName: string
}

export default function Leaderboard() {
  const [teams, setTeams] = useState<Team[]>([])

  useEffect(() => {
    fetch("https://register.hackrx.in/teams/public/leaderboard/v3?level=4")
      .then(res => res.json())
      .then(data => {
        if (data?.success) {
          setTeams(data.data.leaderboard.slice(0, 100)) // Top 100
        }
      })
      .catch(console.error)
  }, [])

  const getRankEmoji = (index: number) => {
    if (index === 0) return "🥇"
    if (index === 1) return "🥈"
    if (index === 2) return "🥉"
    return `#${index + 1}`
  }

  return (
    <Card className="w-full max-w-6xl mx-auto mt-10 border border-muted shadow-lg">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">🏆 HackRx Leaderboard (Top 100)</h2>
        <ScrollArea className="h-[600px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16 text-left">Rank</TableHead>
                <TableHead>Team Name</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Accuracy (%)</TableHead>
                <TableHead className="text-left">College</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teams.map((team, index) => (
                <TableRow key={team.teamId}>
                  <TableCell className={cn("font-bold", index < 3 && "text-yellow-500")}>
                    {getRankEmoji(index)}
                  </TableCell>
                  <TableCell className="font-medium">{team.teamName}</TableCell>
                  <TableCell>{team.totalScore}</TableCell>
                  <TableCell>{team.averageAccuracy}</TableCell>
                  <TableCell className="text-left">{team.collegeName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
