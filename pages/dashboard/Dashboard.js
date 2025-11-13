import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation();

  // Handle back button press
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        Alert.alert(
          "Exit App",
          "Are you sure you want to go back to login?",
          [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel",
            },
            {
              text: "YES",
              onPress: () => navigation.navigate("GoogleAuth"),
            },
          ],
          { cancelable: false }
        );
        return true;
      }
    );

    return () => backHandler.remove();
  }, [navigation]);

  // Mock data for courses
  const enrolledCourses = [
    {
      id: 1,
      title: "Advanced Mathematics",
      instructor: "Dr. Sarah Johnson",
      progress: 75,
      nextClass: "Tomorrow, 10:00 AM",
      color: "#4CAF50",
    },
    {
      id: 2,
      title: "Computer Science",
      instructor: "Prof. Mike Chen",
      progress: 60,
      nextClass: "Today, 2:00 PM",
      color: "#2196F3",
    },
    {
      id: 3,
      title: "Physics",
      instructor: "Dr. Emily Davis",
      progress: 45,
      nextClass: "Wednesday, 11:00 AM",
      color: "#FF9800",
    },
  ];

  const upcomingAssignments = [
    {
      id: 1,
      title: "Calculus Homework",
      course: "Advanced Mathematics",
      dueDate: "Dec 15, 2023",
      priority: "high",
    },
    {
      id: 2,
      title: "Programming Project",
      course: "Computer Science",
      dueDate: "Dec 18, 2023",
      priority: "medium",
    },
    {
      id: 3,
      title: "Lab Report",
      course: "Physics",
      dueDate: "Dec 20, 2023",
      priority: "low",
    },
  ];

  const stats = {
    completedCourses: 12,
    averageGrade: 88,
    studyHours: 45,
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome back,</Text>
          <Text style={styles.userName}>Alex Johnson!</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileInitial}>A</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Stats Overview */}
        <View style={styles.statsContainer}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{stats.completedCourses}</Text>
              <Text style={styles.statLabel}>Courses</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{stats.averageGrade}%</Text>
              <Text style={styles.statLabel}>Avg Grade</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{stats.studyHours}</Text>
              <Text style={styles.statLabel}>Study Hours</Text>
            </View>
          </View>
        </View>

        {/* Enrolled Courses */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Courses</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          {enrolledCourses.map((course) => (
            <TouchableOpacity key={course.id} style={styles.courseCard}>
              <View
                style={[styles.courseColor, { backgroundColor: course.color }]}
              />
              <View style={styles.courseContent}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseInstructor}>{course.instructor}</Text>
                <View style={styles.progressContainer}>
                  <View style={styles.progressBar}>
                    <View
                      style={[
                        styles.progressFill,
                        {
                          width: `${course.progress}%`,
                          backgroundColor: course.color,
                        },
                      ]}
                    />
                  </View>
                  <Text style={styles.progressText}>{course.progress}%</Text>
                </View>
                <Text style={styles.nextClass}>Next: {course.nextClass}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Upcoming Assignments */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Assignments</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          {upcomingAssignments.map((assignment) => (
            <TouchableOpacity key={assignment.id} style={styles.assignmentCard}>
              <View
                style={[
                  styles.priorityIndicator,
                  {
                    backgroundColor:
                      assignment.priority === "high"
                        ? "#FF6B6B"
                        : assignment.priority === "medium"
                        ? "#FFA726"
                        : "#66BB6A",
                  },
                ]}
              />
              <View style={styles.assignmentContent}>
                <Text style={styles.assignmentTitle}>{assignment.title}</Text>
                <Text style={styles.assignmentCourse}>{assignment.course}</Text>
                <Text style={styles.dueDate}>Due: {assignment.dueDate}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>📚</Text>
              <Text style={styles.actionText}>Library</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>📅</Text>
              <Text style={styles.actionText}>Schedule</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>🎯</Text>
              <Text style={styles.actionText}>Goals</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>📊</Text>
              <Text style={styles.actionText}>Progress</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3F2FD",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "#E3F2FD",
  },
  greeting: {
    fontSize: 16,
    color: "#5f6368",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a73e8",
  },
  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#1a73e8",
    alignItems: "center",
    justifyContent: "center",
  },
  profileInitial: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  statsContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  section: {
    marginBottom: 25,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a73e8",
  },
  seeAllText: {
    color: "#1a73e8",
    fontWeight: "600",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
    shadowColor: "#1a73e8",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a73e8",
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: "#5f6368",
    fontWeight: "500",
  },
  courseCard: {
    backgroundColor: "white",
    borderRadius: 16,
    marginBottom: 12,
    flexDirection: "row",
    shadowColor: "#1a73e8",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  courseColor: {
    width: 8,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  courseContent: {
    flex: 1,
    padding: 16,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a73e8",
    marginBottom: 4,
  },
  courseInstructor: {
    fontSize: 14,
    color: "#5f6368",
    marginBottom: 12,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: "#f0f0f0",
    borderRadius: 3,
    marginRight: 10,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#5f6368",
    minWidth: 30,
  },
  nextClass: {
    fontSize: 12,
    color: "#5f6368",
    fontStyle: "italic",
  },
  assignmentCard: {
    backgroundColor: "white",
    borderRadius: 16,
    marginBottom: 10,
    flexDirection: "row",
    shadowColor: "#1a73e8",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  priorityIndicator: {
    width: 6,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  assignmentContent: {
    flex: 1,
    padding: 16,
  },
  assignmentTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a73e8",
    marginBottom: 4,
  },
  assignmentCourse: {
    fontSize: 14,
    color: "#5f6368",
    marginBottom: 4,
  },
  dueDate: {
    fontSize: 12,
    color: "#FF6B6B",
    fontWeight: "500",
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
    shadowColor: "#1a73e8",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1a73e8",
    textAlign: "center",
  },
});
