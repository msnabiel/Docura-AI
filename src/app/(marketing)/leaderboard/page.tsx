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
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Optional: add a Progress component if you want accuracy bars
// import { Progress } from "@/components/ui/progress"

import { motion } from "framer-motion"

type Team = {
  teamName: string
  totalScore: string
  averageAccuracy: string
  teamId: string
  collegeName: string
}

export default function Leaderboard() {
  const [teams, setTeams] = useState<Team[]>([])
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const pageSize = 10
  const [sortKey, setSortKey] = useState<keyof Team>("totalScore")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [lastUpdated, setLastUpdated] = useState<string>("")

  const fetchLeaderboard = () => {
    fetch("https://register.hackrx.in/teams/public/leaderboard/v3?level=4")
      .then(res => res.json())
      .then(data => {
        if (data?.success) {
          setTeams(data.data.leaderboard.slice(0, 100))
          setLastUpdated(new Date().toLocaleTimeString())
        }
      })
      .catch(console.error)
  }

  useEffect(() => {
    fetchLeaderboard()
    const interval = setInterval(() => fetchLeaderboard(), 60000)
    return () => clearInterval(interval)
  }, [])

  const getRankEmoji = (index: number) => {
    if (index === 0) return "🥇"
    if (index === 1) return "🥈"
    if (index === 2) return "🥉"
    return `#${index + 1}`
  }

  const filteredTeams = teams.filter(team =>
    team.teamName.toLowerCase().includes(search.toLowerCase()) ||
    team.collegeName.toLowerCase().includes(search.toLowerCase())
  )

  const sortedTeams = [...filteredTeams].sort((a, b) => {
    const aValue = parseFloat(a[sortKey])
    const bValue = parseFloat(b[sortKey])
    return sortOrder === "asc" ? aValue - bValue : bValue - aValue
  })

  const paginatedTeams = sortedTeams.slice((page - 1) * pageSize, page * pageSize)
  const totalPages = Math.ceil(sortedTeams.length / pageSize)

  const toggleSort = (key: keyof Team) => {
    if (sortKey === key) {
      setSortOrder(order => (order === "asc" ? "desc" : "asc"))
    } else {
      setSortKey(key)
      setSortOrder("desc")
    }
  }

  return (
    <Card className="w-full max-w-6xl mx-auto mt-10 border border-muted shadow-lg">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-center">🏆 HackRx Leaderboard (Top 100)</h2>
        <p className="text-sm text-muted-foreground text-center mb-4">
          Showing {filteredTeams.length} teams • Last updated: {lastUpdated}
        </p>

        <div className="flex justify-between mb-4 items-center">
          <Input
            type="text"
            placeholder="🔍 Search by team or college"
            className="max-w-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={fetchLeaderboard}>🔄 Refresh</Button>
        </div>

        <ScrollArea className="h-[600px] overflow-x-auto">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16 text-left">Rank</TableHead>
                  <TableHead onClick={() => toggleSort("teamName")} className="cursor-pointer">Team Name</TableHead>
                  <TableHead onClick={() => toggleSort("totalScore")} className="cursor-pointer">Score {sortKey === "totalScore" && (sortOrder === "asc" ? "↑" : "↓")}</TableHead>
                  <TableHead onClick={() => toggleSort("averageAccuracy")} className="cursor-pointer">Accuracy (%) {sortKey === "averageAccuracy" && (sortOrder === "asc" ? "↑" : "↓")}</TableHead>
                  <TableHead onClick={() => toggleSort("collegeName")} className="cursor-pointer">College</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedTeams.map((team, index) => (
                  <motion.tr
                    key={team.teamId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.02 }}
                  >
                    <TableCell className={cn("font-bold", index < 3 && "text-yellow-500")}>{getRankEmoji((page - 1) * pageSize + index)}</TableCell>
                    <TableCell className="font-medium">{team.teamName}</TableCell>
                    <TableCell>{team.totalScore}</TableCell>
                    <TableCell>{team.averageAccuracy}</TableCell>
                    <TableCell className="text-left">{team.collegeName}</TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </ScrollArea>

        <div className="flex justify-center items-center gap-4 mt-4">
          <Button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
            Prev
          </Button>
          <span className="text-sm">Page {page} of {totalPages}</span>
          <Button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
