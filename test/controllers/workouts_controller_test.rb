require 'test_helper'

class WorkoutsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @workout = workouts(:one)
  end

  test "should get index" do
    get workouts_url, as: :json
    assert_response :success
  end

  test "should create workout" do
    assert_difference('Workout.count') do
      post workouts_url, params: { workout: { content: @workout.content, date: @workout.date, duration: @workout.duration, rep_count: @workout.rep_count, set_count: @workout.set_count, title: @workout.title, user_id: @workout.user_id, weight_count: @workout.weight_count } }, as: :json
    end

    assert_response 201
  end

  test "should show workout" do
    get workout_url(@workout), as: :json
    assert_response :success
  end

  test "should update workout" do
    patch workout_url(@workout), params: { workout: { content: @workout.content, date: @workout.date, duration: @workout.duration, rep_count: @workout.rep_count, set_count: @workout.set_count, title: @workout.title, user_id: @workout.user_id, weight_count: @workout.weight_count } }, as: :json
    assert_response 200
  end

  test "should destroy workout" do
    assert_difference('Workout.count', -1) do
      delete workout_url(@workout), as: :json
    end

    assert_response 204
  end
end
